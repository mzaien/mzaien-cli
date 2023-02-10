#!/usr/bin/env node
import fetch from 'cross-fetch';
type responseType = {
    login: string,
    id: number,
    node_id: string,
    avatar_url: string,
    gravatar_id?: string,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url?: string,
    starred_url?: string,
    subscriptions_url?: string,
    organizations_url?: string,
    repos_url: string,
    events_url?: string,
    received_events_url?: string,
    type: string,
    site_admin: boolean,
    name: string,
    company?: string,
    blog?: string,
    location?: string,
    email?: string,
    hireable?: string,
    bio?: string,
    twitter_username?: string,
    public_repos: number,
    public_gists: number,
    followers: number,
    following: number,
    created_at: string,
    updated_at: string
}
(async () => {
    try {
        const res = await fetch('//api.github.com/users/mzaien');
        if (res.status >= 400) {
            throw new Error("Bad response from server");
        }
        const data = await res.json() as responseType;
        console.log(`
        Hey there 👋 my name is Abdullah Mzaien a ${data.bio} at ${data.company}

        I usually work on ⚛️:
        - React
        - Typescript
        - Css/Scss
        - Node/Python
        - Some SQL
        
        I spend my free time on 
        - Give stars to cool projects on GitHub 😁 ❤️ and if possible, I'll contribute to them
        - Stretch new technologies too that look interesting e.g Astro, Solid, Unocss
        - Improving my current knowledge in accessibility, user experience / interface design, performance
        - Build some goodies that have value to others or fun to make e.g https://github.com/mzaien/adhan-time
        
        Find me here:
        - 🐦 https://twitter.com/mzaien_
        - 🦑 https://github.com/mzaien
        - 📥 https://www.linkedin.com/in/mzaien
        - 📫 awmzaien@gmail.com
        - 📲 https://cal.com/mzaien        
`)
    } catch (err) {
        console.error(err);
    }
})();