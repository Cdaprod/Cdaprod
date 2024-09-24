---
layout: default
title: Microservices
permalink: /tags/microservices/
---

# Microservices

Explore all content tagged with Microservices.

{% for post in site.tags.microservices %}
  <div class="post-summary">
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <p>{{ post.excerpt }}</p>
  </div>
{% endfor %}