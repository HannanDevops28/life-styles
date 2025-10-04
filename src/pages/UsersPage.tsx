import { useEffect, useMemo, useState, useCallback } from "react";
import { LOCAL_STORAGE_KEYS } from "../constants/localStorageKeys";
import { SearchBar } from "../components/common/SearchBar";
import { FilterBar } from "../components/common/FilterBar";
import { Loader } from "../components/common/Loader";
import { Modal } from "../components/common/Modal";
import { Pagination } from "../components/common/Pagination";
import { UsersGrid } from "../components/dashboard/UsersGrid";
import type { PersistedState, RandomUser } from "../types";
import { DEFAULT_STATE, USERS_PAGE_STATS } from "../constants";
import { fetchUsersData } from "../utils/fetchUtils";
import { filterUsers } from "../utils/filterUtils";
import { HeroSection } from "../components/dashboard/HeroSection";

export function UsersPage() {
  const [state, setState] = useState<PersistedState>(() => {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEYS.USERS_PAGE_STATE);
    return raw ? { ...DEFAULT_STATE, ...JSON.parse(raw) } : DEFAULT_STATE;
  });

  const [users, setUsers] = useState<RandomUser[]>([]);
  const [preview, setPreview] = useState<RandomUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const filteredUsers = useMemo(
    () => filterUsers(users, state.keyword),
    [users, state.keyword]
  );
  const hasNext = true;
  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.USERS_PAGE_STATE,
      JSON.stringify(state)
    );
  }, [state]);

  const loadUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetchUsersData({
        page: state.page,
        gender: state.gender,
      });
      setUsers(res.results);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, [state.page, state.gender]);

  useEffect(() => {
    const controller = new AbortController();
    loadUsers();
    return () => controller.abort();
  }, [loadUsers]);

  return (
    <div className="space-y-6">
      <HeroSection
        state={state}
        usersCount={users.length}
        USERS_PAGE_STATS={USERS_PAGE_STATS}
      />

      <div className="flex flex-col sm:flex-row items-stretch justify-between gap-4 animate-fade-in-up">
        <SearchBar
          value={state.keyword}
          onChange={(keyword) => setState((s) => ({ ...s, keyword, page: 1 }))}
        />
        <FilterBar
          gender={state.gender}
          onGenderChange={(gender) =>
            setState((s) => ({ ...s, gender, page: 1 }))
          }
        />
      </div>

      {error && (
        <div className="rounded-lg border border-red-300/60 bg-red-100/60 p-3 text-sm text-red-800 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-300">
          {error}
        </div>
      )}

      <UsersGrid
        filtered={filteredUsers}
        loading={loading}
        onPreview={setPreview}
      />

      <div className="pt-2">
        <Pagination
          page={state.page}
          hasNext={hasNext}
          onPageChange={(page) => setState((s) => ({ ...s, page }))}
        />
      </div>

      <Modal
        open={!!preview}
        onClose={() => setPreview(null)}
        title={preview ? `${preview.name.first} ${preview.name.last}` : ""}
      >
        {preview && (
          <div className="flex items-center gap-4">
            <img
              src={preview.picture.medium}
              alt=""
              className="h-16 w-16 rounded-full"
            />
            <div className="text-sm">
              <p className="text-[--color-muted]">{preview.email}</p>
              <p>
                {preview.location.city}, {preview.location.country}
              </p>
            </div>
          </div>
        )}
      </Modal>

      <Loader isLoading={loading} />
    </div>
  );
}
