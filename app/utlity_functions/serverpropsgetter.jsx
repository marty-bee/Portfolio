export default async function getServerSideProps() {
    // Fetch user's theme preference from server (e.g., database)
    const theme = await fetchThemeFromServer();
    
    return {
      props: {
        initialTheme: theme,
      },
    };
  }
  