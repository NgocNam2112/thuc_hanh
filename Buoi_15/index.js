const container = document.getElementById("container");

const BASE_URL = "https://6487122fbeba6297278fd770.mockapi.io/testing";

const fetchApi = async () => {
  try {
    const { data } = await axios.get(BASE_URL);
    container.innerHTML = data
      .map((item) => {
        return `
        <div key="${item.id}" class="c__item" >
              <img
                src="${item.avatar}"
                alt="avatar"
              />
              <h2>${item.name}</h2>
              <p>${item.createdAt}</p>
              <div class="c__btn">
                <button>Detail</button>
                <button onclick="handleDetele(${JSON.stringify(item.id)
                  .split('"')
                  .join("&quot;")})">Delete</button>
              </div>
            </div>
        `;
      })
      .join(" ");
  } catch (error) {
    console.error(error);
  }
};

const handleDetele = async (itemId) => {
  try {
    const { data } = await axios.delete(`${BASE_URL}/${itemId}`);
    if (data !== null) {
      fetchApi();
    }
  } catch (error) {}
};

fetchApi();
