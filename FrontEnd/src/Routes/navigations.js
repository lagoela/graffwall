export const returnToLogin = (navigation) => {
  navigation.reset({
    index: 0,
    routes: [{ name: "Welcome" }],
  });
};
