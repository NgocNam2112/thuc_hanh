const container = document.getElementById("container");
const cModal = document.getElementById("c__modal");
const cName = document.getElementById("c_name");
const cCreate = document.getElementById("c_create");
const cImg = document.getElementById("c_img");

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
                <button onclick="handleDetail(${JSON.stringify(item.id)
                  .split('"')
                  .join("&quot;")})">Detail</button>
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

fetchApi();

const handleDetele = async (itemId) => {
  try {
    const { data } = await axios.delete(`${BASE_URL}/${itemId}`);
    if (data !== null) {
      fetchApi();
    }
  } catch (error) {}
};

const handleDetail = async (itemId) => {
  try {
    const { data } = await axios.get(BASE_URL + "/" + itemId);
    if (data !== null) {
      cModal.style.display = "flex";
      cName.innerHTML = data.name;
      cCreate.innerHTML = data.createdAt;
      cImg.setAttribute("src", data.avatar);
    }
  } catch (error) {}
};

const handleCloseModal = () => {
  cModal.style.display = "none";
};
