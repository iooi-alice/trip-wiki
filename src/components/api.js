// https://trip-wiki-api.vercel.app/?start=0
const API_URL = 'https://trip-wiki-api.vercel.app/';

export const request = async (startIdx, region, sortBy, searchWord) => {
  try {
    let url = `${API_URL}`;
    if (region && region !== 'All') {
      // 선택된 지역이 있는 경우
      url += `${region}?start=${startIdx}`;
    } else {
      // 전체인 경우 region 없이 파라미터 시작
      url += `?start=${startIdx}`;
    }

    if (sortBy) {
      url += `&sort=${sortBy}`;
    }

    if (searchWord) {
      url += `&search=${searchWord}`;
    }

    const response = await fetch(url);
    if (response) {
      const data = response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};

export const requestCityDetail = async (cityId) => {
  try {
    const response = await fetch(`${API_URL}city/${cityId}`);
    if (response) {
      const data = response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};
