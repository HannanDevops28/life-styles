export const usersRoutes = [
  {
    index: true,
    lazy: async () => {
      const { UsersPage } = await import("../pages/UsersPage");
      return { Component: UsersPage };
    },
  },
  {
    path: "user/:userId",
    lazy: async () => {
      const { UserProfilePage } = await import("../pages/UserProfilePage");
      return { Component: UserProfilePage };
    },
  },
];
