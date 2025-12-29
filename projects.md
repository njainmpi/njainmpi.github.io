---
title: Projects
---

## Research & Software

{% assign repos = site.github.public_repositories %}
{% for repo in repos %}
{% if repo.fork == false %}
### 🔬 {{ repo.name }}
{{ repo.description }}

**Language:** {{ repo.language }}  
[GitHub →]({{ repo.html_url }})

---
{% endif %}
{% endfor %}
