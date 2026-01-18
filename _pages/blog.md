---
layout: page
permalink: /blog/
title: blog
description: more to come :)
nav: true
nav_order: 4
---

{% for post in site.posts %}

  <div style="display: flex; gap: 20px; margin-bottom: 30px; align-items: flex-start;">
    {% if post.thumbnail %}
      <div style="flex-shrink: 0;">
        <a href="{{ post.url | relative_url }}">
          <img src="{{ post.thumbnail }}" alt="{{ post.title }}" style="width: 150px; height: 100px; object-fit: cover; border-radius: 8px;">
        </a>
      </div>
    {% endif %}
    <div>
      <h2 style="margin-top: 0;"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <p class="post-meta">{{ post.date | date: "%B %Y" }}</p>
      {% if post.excerpt %}
        <p>{{ post.excerpt | strip_html | truncatewords: 15 }}</p>
      {% endif %}
    </div>
  </div>
  <hr>
{% endfor %}
