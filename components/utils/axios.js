import axios from "axios";
import { URL_API } from "./constants";

class FetchRia {
  constructor(option) {
    this.path = option.cstPath || `${URL_API}`;
    this.requiredToken = option.requiredToken || true;
    this.sendCountryCode = option.sendCountryCode || false;
    this.newCountryCode = option.newCountryCode || false;
  }

  async session() {
    let token = await axios.get(`${URL_API}/Authorization/session`, {
      CultureCode: "en-US",
      IsoCode: "US",
    });
    window.sessionStorage.setItem("TOKEN", token.data.authToken.jwtToken);
    return token.data.authToken.jwtToken;
  }

  parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload);
  }

  async getToken(config) {
    let token = await this.session();
    config.headers["Authorization"] = "Bearer " + token;
    let cc, ic;
    if (this.sendCountryCode) {
      let jwt = this.parseJwt(token);
      config.headers["CultureCode"] = this.newCountryCode
        ? this.newCountryCode
        : jwt.cultureCode;
      cc = jwt.cultureCode;
      config.headers["IsoCode"] = jwt.isoCode;
      ic = jwt.isoCode;
    }

    return { config, cultureCode: cc, isoCode: ic };
  }

  async get(url = "/", config = { headers: {} }) {
    let opt = await this.getToken(config);
    return axios
      .get(this.path + url, this.requiredToken ? opt.config : config)
      .then((res) => {
        if (this.sendCountryCode) {
          res["cultureCode"] = opt.cultureCode;
          res["isoCode"] = opt.isoCode;
        }
        return res;
      });
  }

  // async post(url = "/", data = {}, config = {}) {
  async post(url = "/", data = {}, config = { headers: {} }) {
    let opt = await this.getToken(config);

    const newHeader = {
      ...opt,
      config: {
        headers: {
          ...opt.config.headers,
          CultureCode: config.headers.newCultureCode,
        },
      },
    };

    delete newHeader.config.headers.newCultureCode;
    delete opt.config.headers.newCultureCode;

    return (
      axios
        .post(
          this.path + url,
          data,
          this.requiredToken ? newHeader.config : config
        )
        // newHeader.config)
        .then((res) => {
          if (this.sendCountryCode) {
            res["cultureCode"] = opt.cultureCode;
            res["isoCode"] = opt.isoCode;
          }
          return res;
        })
    );
  }

  async put(url = "/", data = {}, config = { headers: {} }) {
    let opt = await this.getToken(config);
    return axios
      .put(this.path + url, data, this.requiredToken ? opt.config : config)
      .then((res) => {
        if (this.sendCountryCode) {
          res["cultureCode"] = opt.cultureCode;
          res["isoCode"] = opt.isoCode;
        }
        return res;
      });
  }

  async delete(url = "/", config = { headers: {} }) {
    let opt = await this.getToken(config);
    return axios
      .delete(this.path + url, this.requiredToken ? opt.config : config)
      .then((res) => {
        if (this.sendCountryCode) {
          res["cultureCode"] = opt.cultureCode;
          res["isoCode"] = opt.isoCode;
        }
        return res;
      });
  }

  async patch(url = "/", data = {}, config = { headers: {} }) {
    let opt = await this.getToken(config);
    return axios
      .patch(this.path + url, data, this.requiredToken ? opt.config : config)
      .then((res) => {
        if (this.sendCountryCode) {
          res["cultureCode"] = opt.cultureCode;
          res["isoCode"] = opt.isoCode;
        }
        return res;
      });
  }

  async options(url = "/", config = { headers: {} }) {
    let opt = await this.getToken(config);
    return axios
      .options(this.path + url, this.requiredToken ? opt.config : config)
      .then((res) => {
        if (this.sendCountryCode) {
          res["cultureCode"] = opt.cultureCode;
          res["isoCode"] = opt.isoCode;
        }
        return res;
      });
  }
}

export default FetchRia;
