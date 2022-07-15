import axios from 'axios'

const url = "https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc"

const FetchData = async() => {
  try {
      const { data } = await axios.get(`${url}`)
      return data
  } catch (error) {
      console.log(error)
  }
}

export default FetchData