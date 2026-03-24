---
layout: layouts/base.njk
title: Education Technology
---

# Hello World!
Welcome to the rebuilt version of my site. I've moved to **Eleventy 3.0** and **Bulma CSS**.

---

## Recent Posts
Below are the posts I've migrated so far:

{% for post in collections.post | reverse %}
### [{{ post.data.title }}]({{ post.url }})
*Published on {{ post.date | postDate }}*

{{ post.data.description or "Read more..." }}

---
{% endfor %}