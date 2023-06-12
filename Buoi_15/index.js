const fetchApi = async () => {
  const { data } = await axios.get(
    "https://6487122fbeba6297278fd770.mockapi.io/testing"
  );
  console.log("data", data);
};

fetchApi();
