export type Link = {
  label: string;
  href: string;
  icon?: "linkedin" | "github" | "whatsapp" | "email" | "youtube" | "instagram" | "tiktok";
};

export type Certification = {
  title: string;
  issuer: string;
  year?: string;
  credentialUrl?: string;
};

export type Education = {
  school: string;
  degree: string;
  period?: string;
  details?: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
};

export type Service = {
  title: string;
  icon?: "cloud" | "boxes" | "git" | "activity" | "shield";
  items: string[];
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  href?: string;
  kind: "github" | "case";
  badge?: string;
};

export type Recommendation = {
  name: string;
  role?: string;
  relationship?: string;
  text: string;
  href?: string;
};

export type FeaturedVideo = {
  title: string;
  href: string;
};

export type GalleryPhoto = {
  src: string;
  alt: string;
};

export type Tech = {
  label: string;
  /**
   * Chave de ícone do pacote "simple-icons".
   * Ex.: "siAmazonwebservices", "siDocker", "siLinux"...
   */
  iconKey: string;
  group:
    | "Cloud"
    | "Containers"
    | "IaC"
    | "CI/CD"
    | "Observabilidade"
    | "Networking & Security"
    | "Linguagens";
};

export type AwsService = {
  label: string;
  /** abreviação exibida no chip */
  abbr: string;
  /** ícone do serviço (PNG 64px) */
  iconUrl?: string;
  group:
    | "Compute & Containers"
    | "Serverless & Integration"
    | "Networking"
    | "Storage & Databases"
    | "Security"
    | "Observability"
    | "DevTools";
};

export type Profile = {
  name: string;
  headline: string;
  location: string;
  email: string;
  phoneE164: string;
  whatsappPrefill: string;
  links: Link[];
  summary: string[];
  featuredVideos: FeaturedVideo[];
  galleryPhotos: GalleryPhoto[];


  services: Service[];
  awsServices: AwsService[];
  tech: Tech[];

  experiences: Experience[];
  projects: Project[];
  certifications: Certification[];
  courses: Certification[];
  education: Education[];
  recommendations: Recommendation[];
};

// Tipagem explícita evita que o TypeScript “congele” o shape dos objetos (as const)
// e ajuda a garantir builds consistentes (incluindo em Docker).
export const profile: Profile = {
  name: "Rafael Alves",
  headline:
    "AWS SysOps | Arquiteto de Soluções | FinOps | DevOps | Linux | Observabilidade",
  location: "Distrito Federal, Brasil",
  email: "rafaelalvescloud@gmail.com",
  phoneE164: "+5561991646471",
  whatsappPrefill:
    "Olá Rafael! Vi seu portfólio e gostaria de falar sobre um projeto/posição em Cloud/DevOps.",

  links: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rafaelinfraedevops/",
      icon: "linkedin",
    },
    { label: "GitHub", href: "https://github.com/rafaelalvesbsb", icon: "github" },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@rafaelalvesbsb",
      icon: "youtube",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/rafaelalvesbsb/",
      icon: "instagram",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@rafaelalvesbsb",
      icon: "tiktok",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/5561991646471",
      icon: "whatsapp",
    },
    { label: "E-mail", href: "mailto:rafaelalvesbsbinfra@gmail.com", icon: "email" },
  ],

  summary: [
    "Analista de Infraestrutura Cloud e On‑Premises com foco em AWS (SysOps/DevOps), redes e observabilidade.",
    "Experiência prática com ambientes containerizados (ECS/Fargate, EKS/Kubernetes), automações Serverless (Lambda/EventBridge/SQS) e IaC (Terraform/CloudFormation).",
    "Atuação em migração/modernização (Windows & Linux) e em operações com visibilidade ponta‑a‑ponta (CloudWatch, Zabbix, Grafana), incluindo alertas/reporting em Slack.",
  ],
  featuredVideos: [
    { title: "Deploy no ECS com CodePipeline (demo)", href: "https://youtu.be/j-sbDxzwWn8" },
    { title: "Observabilidade: CloudWatch + Grafana (demo)", href: "https://youtu.be/j-sbDxzwWn8" },
    { title: "Infra como Código (Terraform/CFN) (demo)", href: "https://youtu.be/j-sbDxzwWn8" },
    { title: "Logs: CloudWatch → S3 (demo)", href: "https://youtu.be/j-sbDxzwWn8" },
  ],

  galleryPhotos: [
    { src: "/gallery/infra-01.jpg", alt: "Infra / Cloud - 01" },
    { src: "/gallery/infra-02.jpg", alt: "Infra / Cloud - 02" },
    { src: "/gallery/infra-03.jpg", alt: "Infra / Cloud - 03" },
    { src: "/gallery/infra-04.jpg", alt: "Infra / Cloud - 04" },
    { src: "/gallery/infra-05.jpg", alt: "Infra / Cloud - 05" },
    { src: "/gallery/infra-06.jpg", alt: "Infra / Cloud - 06" },
    { src: "/gallery/infra-07.jpg", alt: "Infra / Cloud - 07" },
    { src: "/gallery/infra-08.jpg", alt: "Infra / Cloud - 08" },
  ],


  // "O que eu faço" (mais direto e orientado a valor)
  services: [
    {
      title: "AWS SysOps & Arquitetura",
      icon: "cloud",
      items: [
        "ECS/Fargate, EKS/Kubernetes, ECR, Auto Scaling e hardening operacional",
        "VPC, VPN (S2S/C2S), Peering, NAT/IGW/VGW, SG/NACL/Route Tables",
        "S3, RDS, EFS, ALB/ELB, Route 53, ACM, IAM, Secrets Manager",
      ],
    },
    {
      title: "CI/CD & Deploy (DevOps)",
      icon: "git",
      items: [
        "CodePipeline + CodeBuild (build/test) e deploy contínuo em ECS",
        "Automação com Lambda/EventBridge, rotinas agendadas e notificações",
        "Padrões de versionamento, ambientes (dev/stg/prd) e documentação/runbooks",
      ],
    },
    {
      title: "Observabilidade & SRE",
      icon: "activity",
      items: [
        "CloudWatch (métricas/logs/alarms), Log Insights e export de logs para S3",
        "Zabbix + Grafana (dashboards, alertas e relatórios)",
        "Integração com Slack: alertas, relatórios e playbooks de operação",
      ],
    },
    {
      title: "Migração & Networking",
      icon: "boxes",
      items: [
        "Migração VMware (.ova) → EC2 e modernização de workloads",
        "Integrações on‑prem ↔ AWS (conectividade, DNS privado, roteamento)",
        "FinOps: Cost Explorer/Billing e otimização de custos por serviço",
      ],
    },
  ],

  // Lista explícita dos serviços AWS (chips + filtro)
  awsServices: [
    { label: "Amazon EC2", abbr: "EC2", iconUrl: "https://www.awsicon.com/static/images/Service-Icons/Compute/64/png5x/EC2.png", group: "Compute & Containers" },
    { label: "Amazon ECS", abbr: "ECS", iconUrl: "https://www.awsicon.com/static/images/Service-Icons/Containers/64/png5x/Elastic-Container-Service.png", group: "Compute & Containers" },
    { label: "AWS Fargate", abbr: "Farg", iconUrl: "https://www.awsicon.com/static/images/Service-Icons/Containers/64/png5x/Fargate.png", group: "Compute & Containers" },
    { label: "Amazon EKS", abbr: "EKS", iconUrl: "https://www.awsicon.com/static/images/Service-Icons/Containers/64/png5x/Elastic-Kubernetes-Service.png", group: "Compute & Containers" },
    { label: "Amazon ECR", abbr: "ECR", iconUrl: "https://www.awsicon.com/static/images/Service-Icons/Containers/64/png5x/Elastic-Container-Registry.png", group: "Compute & Containers" },
    { label: "Elastic Load Balancing (ALB/NLB)", abbr: "ELB", iconUrl: "https://www.awsicon.com/static/images/Service-Icons/Networking-Content-Delivery/64/png5x/Elastic-Load-Balancing.png", group: "Compute & Containers" },
    { label: "Auto Scaling", abbr: "ASG", iconUrl: "https://www.awsicon.com/static/images/Service-Icons/Management-Governance/64/png5x/Auto-Scaling.png", group: "Compute & Containers" },

    { label: "AWS Lambda", abbr: "λ", iconUrl: "https://www.awsicon.com/static/images/Service-Icons/Compute/64/png5x/Lambda.png", group: "Serverless & Integration" },
    { label: "Amazon EventBridge", abbr: "EVB", iconUrl: "https://www.awsicon.com/static/images/Service-Icons/App-Integration/64/png5x/EventBridge.png", group: "Serverless & Integration" },
    { label: "Amazon SNS", abbr: "SNS", iconUrl: "https://www.awsicon.com/static/images/Service-Icons/App-Integration/64/png5x/Simple-Notification-Service.png", group: "Serverless & Integration" },
    { label: "Amazon SQS", abbr: "SQS", iconUrl: "https://www.awsicon.com/static/images/Service-Icons/App-Integration/64/png5x/Simple-Queue-Service.png", group: "Serverless & Integration" },
    { label: "Amazon SES", abbr: "SES", iconUrl: "https://www.awsicon.com/static/images/Service-Icons/Business-Applications/64/png5x/Simple-Email-Service.png", group: "Serverless & Integration" },

    { label: "Amazon VPC", abbr: "VPC", iconUrl: "https://www.awsicon.com/static/images/Service-Icons/Networking-Content-Delivery/64/png5x/Virtual-Private-Cloud.png", group: "Networking" },
    { label: "Site‑to‑Site / Client VPN", abbr: "VPN", iconUrl: "https://www.awsicon.com/static/images/Service-Icons/Networking-Content-Delivery/64/png5x/Client-VPN.png", group: "Networking" },
    { label: "VPC Peering", abbr: "Peer", iconUrl: "https://www.awsicon.com/static/images/Service-Icons/Networking-Content-Delivery/64/png5x/Virtual-Private-Cloud.png", group: "Networking" },
    { label: "Route 53", abbr: "R53", iconUrl: "https://www.awsicon.com/static/images/Service-Icons/Networking-Content-Delivery/64/png5x/Route-53.png", group: "Networking" },
    { label: "Amazon CloudFront", abbr: "CF", iconUrl: "https://www.awsicon.com/static/images/Service-Icons/Networking-Content-Delivery/64/png5x/CloudFront.png", group: "Networking" },

    { label: "Amazon S3", abbr: "S3", iconUrl: "https://www.awsicon.com/static/images/Service-Icons/Storage/64/png5x/Simple-Storage-Service.png", group: "Storage & Databases" },
    { label: "Amazon EFS", abbr: "EFS", iconUrl: "https://www.awsicon.com/static/images/Service-Icons/Storage/64/png5x/EFS.png", group: "Storage & Databases" },
    { label: "Amazon RDS", abbr: "RDS", iconUrl: "https://www.awsicon.com/static/images/Service-Icons/Database/64/png5x/RDS.png", group: "Storage & Databases" },

    { label: "IAM", abbr: "IAM", iconUrl: "https://www.awsicon.com/static/images/Service-Icons/Security-Identity-Compliance/64/png5x/Identity-and-Access-Management.png", group: "Security" },
    { label: "AWS Certificate Manager", abbr: "ACM", iconUrl: "https://www.awsicon.com/static/images/Service-Icons/Security-Identity-Compliance/64/png5x/Certificate-Manager.png", group: "Security" },
    { label: "AWS Secrets Manager", abbr: "ASM", iconUrl: "https://www.awsicon.com/static/images/Service-Icons/Security-Identity-Compliance/64/png5x/Secrets-Manager.png", group: "Security" },

    { label: "Amazon CloudWatch", abbr: "CW", iconUrl: "https://www.awsicon.com/static/images/Service-Icons/Management-Governance/64/png5x/CloudWatch.png", group: "Observability" },
    { label: "CloudWatch Logs Insights", abbr: "QL", iconUrl: "https://www.awsicon.com/static/images/Service-Icons/Management-Governance/64/png5x/CloudWatch.png", group: "Observability" },

    { label: "AWS CodePipeline", abbr: "CP", iconUrl: "https://www.awsicon.com/static/images/Service-Icons/Developer-Tools/64/png5x/CodePipeline.png", group: "DevTools" },
    { label: "AWS CodeBuild", abbr: "CB", iconUrl: "https://www.awsicon.com/static/images/Service-Icons/Developer-Tools/64/png5x/CodeBuild.png", group: "DevTools" },
    { label: "AWS CodeDeploy", abbr: "CD", iconUrl: "https://www.awsicon.com/static/images/Service-Icons/Developer-Tools/64/png5x/CodeDeploy.png", group: "DevTools" },
    { label: "AWS CloudFormation", abbr: "CFN", iconUrl: "https://www.awsicon.com/static/images/Service-Icons/Management-Governance/64/png5x/CloudFormation.png", group: "DevTools" },
  ],

  // Logos / tecnologias (Simple Icons)
  tech: [
    // Cloud
    { label: "AWS", iconKey: "siAmazonwebservices", group: "Cloud" },

    // Containers
    { label: "Docker", iconKey: "siDocker", group: "Containers" },
    { label: "Kubernetes", iconKey: "siKubernetes", group: "Containers" },

    // IaC
    { label: "Terraform", iconKey: "siTerraform", group: "IaC" },

    // CI/CD
    { label: "GitHub", iconKey: "siGithub", group: "CI/CD" },
    { label: "GitLab", iconKey: "siGitlab", group: "CI/CD" },

    // Observabilidade
    { label: "Grafana", iconKey: "siGrafana", group: "Observabilidade" },
    { label: "Zabbix", iconKey: "siZabbix", group: "Observabilidade" },

    // Networking & Security
    { label: "Cloudflare", iconKey: "siCloudflare", group: "Networking & Security" },
    { label: "NGINX", iconKey: "siNginx", group: "Networking & Security" },
    { label: "Linux", iconKey: "siLinux", group: "Networking & Security" },

    // Linguagens
    { label: "Python", iconKey: "siPython", group: "Linguagens" },
  ],

  experiences: [
        {
      company: "AGF",
      role: "Analista Cloud Pleno - AWS",
      period: "Mar/2024 — Nov/2024 (9 meses)",
      location: "Brasília/DF",
      highlights: [
        "Operação e implementação de serviços AWS (gerenciados e não gerenciados) com foco em disponibilidade, segurança e padrões.",
        "Suporte a CI/CD e plataformas de containers: ECS - Elastic Compute Cloude GitHub.",
        "Operação de ambiente Ci/CD com integração GitHub a esteira de pipelne AWS Code Pipeline + CodeBuild → ECS/Fargate.",
        "Operação e controle com serverless (Lambda e EventBridge) para automações, integrações e notificações.",
        "Reestruturação de redes (VPC) e conectividade entre contas; aplicação de boas práticas de segurança e governança.",
        "Implementações e operação: SES, SNS, CloudWatch, automações e integrações serverless.",
        "FinOps: análises de Billing/Cost e CloudCheckr; documentação e diagramas de arquitetura.",
        "Monitoramento com CloudWatch, Zabbix e Grafana",
        "Sustetação de serviços e infraestrutura AWS de instancias EC2, incluindo troubleshooting atualização de S.O.",
        "Atuação como analista Linux, suporte a aplicações web (NGINX, OpenLiteSpeed, PHP) e bancos MySQL/MariaDB.",
        "Sistemas operacionais: Amazon Linux 2, Ubuntu Server e Windows Server, RHEL",
      ],
    },
    {
      company: "NuageIT",
      role: "Analista Cloud Pleno - AWS",
      period: "Mar/2024 — Nov/2024 (9 meses)",
      location: "Brasília/DF",
      highlights: [
        "Operação e implementação de serviços AWS (gerenciados e não gerenciados) com foco em disponibilidade, segurança e padrões.",
        "Suporte a CI/CD e plataformas de containers: EKS/Kubernetes, Rancher, GitLab e GitHub.",
        "Reestruturação de redes (VPC) e conectividade; aplicação de boas práticas de segurança e governança.",
        "Implementações e operação: SES, SNS, CloudWatch e Cognito; automações e integrações serverless.",
        "FinOps: análises de Billing/Cost e CloudCheckr; documentação e diagramas de arquitetura.",
        "Monitoramento com Zabbix e Grafana; atuação como analista Linux.",
        "Sustetação de serviços e infraestrutura AWS de instancias EC2, incluindo troubleshooting atualização de S.O.",
        "Atuação como analista Linux, suporte a aplicações web (NGINX, OpenLiteSpeed, PHP) e bancos MySQL/MariaDB.",
        "Sistemas operacionais: Amazon Linux 2, Ubuntu Server e Windows Server, RHEL",
      ],
    },
    {
      company: "At Hand Tecnologia",
      role: "Analista Cloud Pleno - AWS",
      period: "Out/2023 — Abr/2024 (7 meses)",
      location: "São Luís/MA",
      highlights: [
        "Atuei como Analista na parte de Parceiria com a AWS, contrução de SDPs (AWS Config, EC2 for Windows Server, Systems Manager)"
        "Levantamento de requisitos e execução de migração On‑Premises → AWS (Windows e Linux).",
        "Migração VMware (.ova) para EC2 com ajustes de rede, storage e segurança.",
        "Reestruturação de VPC e conectividade: SG, NACL, Route Tables, NAT, IGW, VGW, VPN e VPC Peering.",
        "Automação com Lambda e EventBridge (rotinas, integrações e notificações).",
        "Operação e controle com serverless (Lambda e EventBridge) para automações, integrações e notificações.",
        "Reestruturação de redes (VPC) e conectividade entre contas; aplicação de boas práticas de segurança e governança.",
        "Implementações e operação: SES, SNS, CloudWatch, automações e integrações serverless.",
        "FinOps: análises de Billing/Cost e CloudCheckr; documentação e diagramas de arquitetura.",
        "Monitoramento com CloudWatch, Zabbix e Grafana",
        "Sustetação de serviços e infraestrutura AWS de instancias EC2, incluindo troubleshooting atualização de S.O.",
        "Atuação como analista Linux, suporte a aplicações web (NGINX, OpenLiteSpeed, PHP) e bancos MySQL/MariaDB.",
        "Sistemas operacionais: Amazon Linux 2, Ubuntu Server e Windows Server, RHEL",
      ],
    },
    {
      company: "Triscal",
      role: "Consultor Arquiteto Cloud",
      period: "Jan/2023 — Out/2023 (10 meses)",
      location: "Rio de Janeiro/RJ",
      highlights: [
        "Arquitetura de soluções e planejamento de migração On‑Premises → AWS.",
        "Integração de serviços locais com AWS e desenho de arquitetura alvo.",
        "Análises de custos (Cost Explorer) e relatórios para tomada de decisão.",
        "Documentação visual e escrita (diagramas, runbooks e padronização).",
      ],
    },
    {
      company: "Configr",
      role: "Analista de Cloud Hosting",
      period: "Set/2021 — Jan/2023 (1 ano e 5 meses)",
      location: "Brasília/DF",
      highlights: [
        "Suporte avançado a Linux (Ubuntu) e automações via Shell Script.",
        "Troubleshooting em aplicações web: NGINX, OpenLiteSpeed, PHP, WordPress e Moodle.",
        "Administração de bancos MySQL/MariaDB e rotinas de backup/restauração.",
        "Operação em cloud (Linode): provisionamento, resize de disco, transferência de IP e restore.",
      ],
    },
  ],

  projects: [
    {
      kind: "github",
      title: "Labs AWS SysOps (Associate)",
      badge: "GitHub",
      description:
        "Laboratórios e estudos voltados à certificação AWS SysOps Associate, com práticas de operação e troubleshooting.",
      stack: ["AWS", "SysOps", "Hands-on"],
      href: "https://github.com/rafaelalvesbsb/labs-awssysops",
    },
    {
      kind: "github",
      title: "AWS com Terraform (curso)",
      badge: "GitHub",
      description:
        "Infraestrutura como código com Terraform para AWS (arquivos do curso) e práticas de automação.",
      stack: ["Terraform", "AWS", "IaC"],
      href: "https://github.com/rafaelalvesbsb/curso-aws-com-terraform",
    },
    {
      kind: "github",
      title: "AWS Lambda + Python (Serverless)",
      badge: "GitHub",
      description:
        "Projeto de estudos/curso com Lambda em Python e padrões de automação serverless.",
      stack: ["AWS Lambda", "Python", "Serverless"],
      href: "https://github.com/rafaelalvesbsb/curso-aws-lambda-python-serverless",
    },
    {
      kind: "github",
      title: "WordPress em ECS Fargate",
      badge: "GitHub",
      description:
        "Deploy de WordPress sem servidores usando ECS/Fargate, com foco em operação e escalabilidade.",
      stack: ["ECS", "Fargate", "WordPress"],
      href: "https://github.com/rafaelalvesbsb/deploy-wordpress-on-amazon-ecs-fargate",
    },
    {
      kind: "github",
      title: "WordPress Multisite + ECS + EFS + RDS",
      badge: "GitHub",
      description:
        "Arquitetura de WordPress em containers no ECS, persistência em EFS e banco em RDS.",
      stack: ["ECS", "EFS", "RDS"],
      href: "https://github.com/rafaelalvesbsb/wordpress-multisite-ecs-efs-rds",
    },

    {
      kind: "case",
      title: "CI/CD na prática: CodePipeline + CodeBuild → ECS",
      badge: "Case",
      description:
        "Desenho de pipeline com build/test, publicação em ECR e deploy contínuo em ECS (rolling/blue‑green), com observabilidade e rollback.",
      stack: ["CodePipeline", "CodeBuild", "ECR", "ECS"],
    },
    {
      kind: "case",
      title: "Exportação e organização de logs (CloudWatch → S3)",
      badge: "Case",
      description:
        "Automação em Python/Lambda para coletar log streams do dia (fuso -03), organizar por prefixos e enviar para S3 com estrutura de pastas consistente.",
      stack: ["CloudWatch Logs", "Lambda", "Python", "S3"],
    },
    {
      kind: "case",
      title: "Notificações e relatórios em Slack (Zabbix/Grafana/AWS)",
      badge: "Case",
      description:
        "Integrações para alertas e relatórios (CPU/RAM, pipelines, eventos) enviados ao Slack via webhook, com formatação padronizada e foco operacional.",
      stack: ["Zabbix", "Grafana", "CloudWatch", "Slack"],
    },
    {
      kind: "case",
      title: "Infra como Código (ECS + ALB + EFS + RDS)",
      badge: "Case",
      description:
        "Blueprint de infraestrutura para WordPress em ECS/Fargate com persistência em EFS, ALB público, RDS e logs no CloudWatch — incluindo permissões e criação automática de log groups/streams.",
      stack: ["CloudFormation", "ECS", "ALB", "EFS", "RDS"],
    },
    {
      kind: "case",
      title: "DNS privado via VPN + Cloudflare Zero Trust (Route 53)",
      badge: "Case",
      description:
        "Acesso seguro a registros internos (Route 53 Private Hosted Zone) via VPN, com clientes usando Cloudflare Zero Trust/WARP para resolução e acesso a recursos privados na VPC.",
      stack: ["Route 53", "VPN", "Cloudflare Zero Trust", "Networking"],
    },
  ],

  certifications: [
    {
      title: "AWS Certified Solutions Architect – Associate (SAA-C03)",
      issuer: "Amazon Web Services",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
    },
  ],

  courses: [
    {
      title: "AWS Partner: Accreditation (Technical) (Portuguese)",
      issuer: "AWS Partner Network",
    },
    {
      title: "AWS Billing and Cost Management (Portuguese)",
      issuer: "AWS Training",
    },
    { title: "Terraform – do Básico ao Avançado", issuer: "Curso" },
  ],

  education: [
    {
      school: "Grupo Projeção",
      degree: "Bacharelado em Sistemas de Informação",
      period: "2016 — 2021",
    },
    {
      school: "SENAI/SC",
      degree: "Técnico em Redes de Computadores (Administração de Redes e Sistemas)",
      period: "2012 — 2013",
    },
  ],

  recommendations: [
    // ⚠️ O LinkedIn costuma bloquear leitura automática. Se você colar aqui os textos
    // (nome, cargo, texto), o site exibe automaticamente.
    // Dica rápida: abra seu LinkedIn > Recomendações > copie e cole.
  ],
};
