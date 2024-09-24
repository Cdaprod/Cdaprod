---
layout: default
title: Publications
permalink: /publications/
---

# Publications

Here are some of my published works:

1. **[Building and Deploying a MinIO-Powered LangChain Agent API with LangServe](https://cdaprod.github.io/publications/building-and-deploying-minio-langchain-agent-api/)**
2. **[Dynamic ETL Pipeline: Hydrate AI with Web Data for MinIO and Weaviate using Unstructured-IO](https://cdaprod.github.io/publications/dynamic-etl-pipeline-hydrate-ai-with-web-data/)**
3. **[Disaster Proof MinIO with GitOps](https://cdaprod.github.io/publications/disaster-proof-minio-with-gitops/)**
4. **[Optimizing AI Data Processing with MinIO Weaviate and Langchain in Retrieval Augmented Generation (RAG) Pipelines](https://cdaprod.github.io/publications/optimizing-ai-data-processing-with-minio-weaviate-and-langchain/)**
5. **[The Future of Hybrid Cloud Pipelines: Integrating MinIO, Tailscale, and GitHub Actions](https://cdaprod.github.io/publications/the-future-of-hybrid-cloud-pipelines-integrating-minio-tailscale-and-github-actions/)**
6. **[Deploying Application Infrastructure with MinIO S3 and Tailscale VPN](https://cdaprod.github.io/publications/deploying-application-infrastructure-with-minio-s3-and-tailscale-vpn/)**

## Categories

<ul class="categories-list">
  {% for category in site.categories %}
    <li><a href="{{ '/categories/' | append: category[0] | relative_url }}">{{ category[0] | capitalize }}</a> ({{ category[1].size }})</li>
  {% endfor %}
</ul>

## Tags

<ul class="tags-list">
  {% assign unique_tags = site.tags | sort %}
  {% for tag in unique_tags %}
    <li><a href="{{ '/tags/' | append: tag[0] | relative_url }}">{{ tag[0] | capitalize }}</a> ({{ tag[1].size }})</li>
  {% endfor %}
</ul>