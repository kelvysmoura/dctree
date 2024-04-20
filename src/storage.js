
export default {

    getItem(key) {
        let result = window.localStorage.getItem(key);
        return JSON.parse(result) ?? [];
    },

    setItem(key, value) {
        value = JSON.stringify(value);
        return window.localStorage.setItem(key, value);
    },

    getAccountLinks() {
        return this.getItem('account-links');
    },

    setAccountLinks(links) {
        this.setItem('account-links', links)
    }
}