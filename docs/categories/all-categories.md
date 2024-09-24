---
layout: default
title: All Categories
permalink: /categories/
---
   
# All Categories
   
<ul>
  {% for category in site.categories %}
    <li><a href="{{ '/categories/' | append: category[0] | relative_url }}">{{ category[0] | capitalize }}</a> ({{ category[1].size }})</li>
  {% endfor %}
</ul>