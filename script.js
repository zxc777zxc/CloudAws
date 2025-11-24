// Структура данных для тестов
// Каждый тест содержит массив вопросов
// Каждый вопрос содержит: вопрос, 4-5 вариантов ответа, правильный ответ (индекс от 0 до 4)
// Обновлённый testsData (только Тест 2 и Тест 3 заменены; остальные тесты оставлены как в исходнике)
const testsData = [

  {
    "id": 0,
    "title": "All AWS Modules - Combined Questions",
    "questions": [
      {
        "question": "What are the advantages of cloud computing over computing on premises?",
        "answers": [
          "Avoid large capital purchase",
          "Use on-demand capacity",
          "Go global in minutes",
          "Increase speed and agility",
          "All of the above"
        ],
        "correct": 4
      },
      {
        "question": "What is the pricing model that enables AWS customers to pay for resources on an as-needed basis?",
        "answers": [
          "Pay as you decommission",
          "Pay as you go",
          "Pay as you buy",
          "Pay as you reserve"
        ],
        "correct": 1
      },
      {
        "question": "Which of these is NOT a cloud computing model?",
        "answers": [
          "Platform as a service",
          "Infrastructure as a service",
          "System Administration as a service",
          "Software as a service"
        ],
        "correct": 2
      },
      {
        "question": "True or False? AWS owns and maintains the hardware while you provision and use what you need.",
        "answers": ["True", "False"],
        "correct": 0
      },
      {
        "question": "Which is NOT a primary benefit of cloud computing?",
        "answers": [
          "Increase speed and agility",
          "Pay for racking, stacking and powering servers",
          "Eliminate capacity guessing",
          "Trade capital expense for variable expense"
        ],
        "correct": 1
      },
      {
        "question": "Which are NOT benefits of AWS Cloud computing? (Choose two)",
        "answers": [
          "Multiple procurement cycles",
          "High-availability",
          "High-latency",
          "Temporary resources",
          "Fault-tolerant databases"
        ],
        "correct": [0, 2]
      },
      {
        "question": "Which of the following is a compute service?",
        "answers": ["Amazon VPC", "Amazon S3", "Amazon EC2", "Amazon CloudFront", "Amazon Redshift"],
        "correct": 2
      },
      {
        "question": "True or False? You own the hardware and AWS provisions what you need.",
        "answers": ["True", "False"],
        "correct": 1
      },
      {
        "question": "Economies of scale result from:",
        "answers": [
          "Many cloud providers",
          "Hundreds of thousands of customers aggregated",
          "Many cloud services",
          "Heavy investment in datacenters"
        ],
        "correct": 1
      },
      {
        "question": "Which are ways to access AWS services? (Choose three)",
        "answers": [
          "Technical support calls",
          "AWS Marketplace",
          "AWS Management Console",
          "AWS CLI",
          "AWS SDKs"
        ],
        "correct": [2, 3, 4]
      },
      {
        "question": "Which reserved instance options exist? (Choose three)",
        "answers": ["AURI", "MURI", "NURI", "PURI", "DURI"],
        "correct": [0, 2, 3]
      },
      {
        "question": "Where can a customer get detailed EC2 billing data from 3 months ago?",
        "answers": [
          "EC2 Dashboard",
          "AWS Cost Explorer",
          "Trusted Advisor",
          "CloudTrail logs in S3"
        ],
        "correct": 1
      },
      {
        "question": "True or False? To receive RI discounts you must pay full upfront.",
        "answers": ["True", "False"],
        "correct": 1
      },
      {
        "question": "Which statement is true about AWS pricing?",
        "answers": [
          "Inbound transfer has per GB charge",
          "Storage is charged per GB",
          "Compute is billed monthly",
          "Outbound is free up to a limit"
        ],
        "correct": 1
      },
      {
        "question": "Which support plans exist?",
        "answers": [
          "Basic, Developer, Business, Enterprise",
          "Basic, Startup, Business, Enterprise",
          "Free, Bronze, Silver, Gold",
          "All support is free"
        ],
        "correct": 0
      },
      {
        "question": "Which AWS tool lets you estimate AWS costs?",
        "answers": [
          "AWS Pricing Calculator",
          "AWS Budgets",
          "Cost & Usage Report",
          "Billing Dashboard"
        ],
        "correct": 0
      },
      {
        "question": "What is it called when AWS reduces costs as it grows?",
        "answers": ["Expenditure awareness", "Economies of scale", "Matching supply/demand", "Right sizing"],
        "correct": 1
      },
      {
        "question": "True or False? Many AWS services are free, but you may pay for what they use.",
        "answers": ["True", "False"],
        "correct": 0
      },
      {
        "question": "Which are benefits of AWS Organizations? (Choose two)",
        "answers": [
          "Replaces IAM with SCPs",
          "Groups accounts and attaches policies",
          "Unlimited nested OUs",
          "Automates account creation",
          "Removes root user limits"
        ],
        "correct": [1, 3]
      },
      {
        "question": "True or False? AWS Free Tier provides unlimited access for 12 months.",
        "answers": ["True", "False"],
        "correct": 1
      },
      {
        "question": "Which component does CloudFront use for low latency?",
        "answers": ["Regions", "Edge Locations", "AZs", "VPC"],
        "correct": 1
      },
      {
        "question": "Running workloads closer to users __________ latency.",
        "answers": ["Increases", "Decreases"],
        "correct": 1
      },
      {
        "question": "Networking, storage, compute, and databases are AWS service categories.",
        "answers": ["True", "False"],
        "correct": 0
      },
      {
        "question": "Which geographic areas host 2+ Availability Zones?",
        "answers": ["Origins", "Regions", "Compute Zones", "Edge Locations"],
        "correct": 1
      },
      {
        "question": "_______ means redundancy and _______ means dynamic capacity.",
        "answers": [
          "Fault tolerant, elastic and scalable",
          "No human intervention, fault tolerant",
          "Elastic and scalable, no human intervention",
          "Fault tolerant, no human intervention"
        ],
        "correct": 0
      },
      {
        "question": "True or False? AZs within a Region have low-latency links.",
        "answers": ["True", "False"],
        "correct": 0
      },
      {
        "question": "Which statement about AZs is NOT true?",
        "answers": [
          "Designed for fault isolation",
          "Made of one or more data centers",
          "A data center can be used for multiple AZs",
          "Connected via high-speed private links"
        ],
        "correct": 2
      },
      {
        "question": "What is true about Regions? (Choose two)",
        "answers": [
          "They are physical locations of customers",
          "Each Region has multiple AZs",
          "All Regions in one geographic area",
          "Each Region is in a separate geographic area"
        ],
        "correct": [1, 3]
      },
      {
        "question": "AWS recommends spreading compute across ______ AZs.",
        "answers": ["All", "Multiple", "Single", "None"],
        "correct": 1
      },
      {
        "question": "Edge locations are only located near Regions.",
        "answers": ["True", "False"],
        "correct": 1
      },
      {
        "question": "In the shared responsibility model, AWS handles:",
        "answers": [
          "Security OF the cloud",
          "Security TO the cloud",
          "Security FOR the cloud",
          "Security IN the cloud"
        ],
        "correct": 0
      },
      {
        "question": "Which are examples of security IN the cloud? (Choose two)",
        "answers": [
          "Compliance with security standards",
          "Physical datacenter security",
          "Security groups",
          "Data encryption",
          "Protecting global infrastructure"
        ],
        "correct": [2, 3]
      },
      {
        "question": "Which is AWS responsible for?",
        "answers": [
          "Configuring third-party apps",
          "Maintaining physical hardware",
          "Security of app access",
          "Managing custom AMIs"
        ],
        "correct": 1
      },
      {
        "question": "IAM policies grant which access types? (Choose two)",
        "answers": [
          "Institutional Access",
          "Authorized Access",
          "Programmatic Access",
          "Console Access",
          "Root Administrative Access"
        ],
        "correct": [2, 3]
      },
      {
        "question": "AWS Organizations consolidates AWS accounts.",
        "answers": ["True", "False"],
        "correct": 0
      },
      {
        "question": "Which are IAM security best practices? (Choose two)",
        "answers": [
          "Give admin privileges by default",
          "Leave unused accounts",
          "Manage access",
          "Avoid IAM groups",
          "Use fine-grained permissions"
        ],
        "correct": [2, 4]
      },
      {
        "question": "What should only the root user do?",
        "answers": [
          "Secure applications",
          "Integrate AWS services",
          "Change granular permissions",
          "Change support plan"
        ],
        "correct": 3
      },
      {
        "question": "Best practice for root user after initial login?",
        "answers": [
          "Delete root user",
          "Revoke all permissions",
          "Restrict permissions",
          "Delete root access keys"
        ],
        "correct": 3
      },
      {
        "question": "How to add extra login security for IAM users?",
        "answers": ["Cloud Directory", "Audit IAM roles", "Enable MFA", "Enable CloudTrail"],
        "correct": 2
      },
      {
        "question": "AWS KMS helps audit AWS configurations.",
        "answers": ["True", "False"],
        "correct": 1
      },
      {
        "question": "Smallest subnet in a VPC?",
        "answers": ["/28", "/26", "/30", "/24"],
        "correct": 0
      },
      {
        "question": "Largest IP range for a VPC?",
        "answers": ["/24", "/16", "/28", "/30"],
        "correct": 1
      },
      {
        "question": "To allow private subnet resources internet access, you need:",
        "answers": ["Security groups", "Route tables", "NAT gateway", "NACLs"],
        "correct": 2
      },
      {
        "question": "Which service creates a virtual network?",
        "answers": ["VPC", "AWS Config", "Route 53", "Direct Connect"],
        "correct": 0
      },
      {
        "question": "Private subnets have direct internet access.",
        "answers": ["True", "False"],
        "correct": 1
      },
      {
        "question": "CloudFront uses what for low latency?",
        "answers": ["VPC", "AZs", "Regions", "Edge Locations"],
        "correct": 3
      },
      {
        "question": "Optional security at subnet layer?",
        "answers": ["Firewall", "Network ACL", "WAF", "Security group"],
        "correct": 1
      },
      {
        "question": "What is created by default when you create a VPC?",
        "answers": [
          "Internet gateway",
          "3 subnets",
          "Subnets per AZ",
          "Main route table"
        ],
        "correct": 3
      },
      {
        "question": "What protects EC2 instances?",
        "answers": ["AMI", "All of the above", "Security group", "Internet gateway"],
        "correct": 2
      },
      {
        "question": "If VPC is 10.0.1.0/24, how many IPs available?",
        "answers": ["246", "251", "256", "250"],
        "correct": 1
      },
      {
        "question": "Why is AWS more economical for variable workloads?",
        "answers": [
          "EC2 billed monthly",
          "Full admin access",
          "Run peak capacity always",
          "Launch EC2 on-demand"
        ],
        "correct": 3
      },
      {
        "question": "For monthly large data reports, choose:",
        "answers": [
          "Spot instances",
          "Scheduled RIs",
          "Dedicated Hosts",
          "On-Demand"
        ],
        "correct": 1
      },
      {
        "question": "An AMI includes:",
        "answers": [
          "Root volume template",
          "Launch permissions",
          "Block device mapping",
          "All of the above"
        ],
        "correct": 3
      },
      {
        "question": "Which EC2 feature ensures no shared physical host?",
        "answers": [
          "VPC",
          "Placement groups",
          "Dedicated Instances",
          "Reserved Instances"
        ],
        "correct": 2
      },
      {
        "question": "Which is serverless compute?",
        "answers": ["AWS Config", "Lambda", "OpsWorks", "EC2"],
        "correct": 1
      },
      {
        "question": "Service for easy deployment of applications?",
        "answers": ["ECS", "Elastic Beanstalk", "OpsWorks", "CloudFormation"],
        "correct": 1
      },
      {
        "question": "Traffic triples once a month. Best option?",
        "answers": [
          "Run 12 RIs always",
          "Run 4 on-demand and add 8 on-demand",
          "Run 4 RIs and add 8 on-demand as needed",
          "Run 4 on-demand and add 8 reserved"
        ],
        "correct": 2
      },
      {
        "question": "Containers contain a full OS.",
        "answers": ["True", "False"],
        "correct": 1
      },
      {
        "question": "Best EC2 option for predictable long-term workloads?",
        "answers": ["Spot", "On-demand", "Reserved"],
        "correct": 2
      },
      {
        "question": "When launching EC2 Windows, you must specify: (Choose two)",
        "answers": [
          "Instance type",
          "AMI",
          "Instance ID",
          "Admin password"
        ],
        "correct": [0, 1]
      },
      {
        "question": "S3 is suitable for flat files like documents and photos.",
        "answers": ["True", "False"],
        "correct": 0
      },
      {
        "question": "S3 replicates objects:",
        "answers": [
          "Within a single AZ",
          "Across multiple AZs",
          "Across Regions",
          "Across multiple buckets"
        ],
        "correct": 1
      },
      {
        "question": "Valid storage classes for lifecycle rules:",
        "answers": [
          "S3 Standard",
          "Storage Gateway",
          "S3 IA",
          "Glacier",
          "RRS",
          "DynamoDB"
        ],
        "correct": [0, 2, 3]
      },
      {
        "question": "S3 bucket names must be unique:",
        "answers": [
          "Worldwide",
          "Within region",
          "Across your accounts",
          "Within your account"
        ],
        "correct": 0
      },
      {
        "question": "EFS can be used to:",
        "answers": [
          "Provide storage only inside AWS",
          "Provide shared storage for EC2",
          "Host CDN",
          "Generate user content"
        ],
        "correct": 1
      },
      {
        "question": "EBS recommended when data: (Choose two)",
        "answers": [
          "Requires object storage",
          "Must be quickly accessible",
          "Requires encryption",
          "Stored in another AZ"
        ],
        "correct": [1, 2]
      },
      {
        "question": "By default, S3 data is publicly viewable.",
        "answers": ["True", "False"],
        "correct": 1
      },
      {
        "question": "In S3 Glacier, what is a vault?",
        "answers": [
          "Access rules",
          "An object",
          "A container for archives",
          "A permission policy"
        ],
        "correct": 2
      },
      {
        "question": "S3 buckets are associated with a specific region.",
        "answers": ["True", "False"],
        "correct": 0
      },
      {
        "question": "Which are EBS features? (Choose two)",
        "answers": [
          "Data lost when stopped",
          "Encrypted transparently",
          "Backed up to tape",
          "Replicated within AZ"
        ],
        "correct": [1, 3]
      },
      {
        "question": "Best DB for storing session state for huge user load?",
        "answers": ["RDS", "DynamoDB", "Redshift", "S3"],
        "correct": 1
      },
      {
        "question": "RDS patches DB software and performs backups automatically.",
        "answers": ["True", "False"],
        "correct": 0
      },
      {
        "question": "Find an item in DynamoDB using non-primary attribute:",
        "answers": ["PutItem", "Scan", "Query", "GetItem"],
        "correct": 1
      },
      {
        "question": "Query operation allows:",
        "answers": [
          "Query by partition key",
          "Query secondary indexes",
          "Efficient retrieval",
          "All of the above"
        ],
        "correct": 3
      },
      {
        "question": "Best service for SQL analytics?",
        "answers": ["RDS", "Glacier", "DynamoDB", "Redshift"],
        "correct": 3
      },
      {
        "question": "In DynamoDB, an attribute is:",
        "answers": [
          "Fundamental data element",
          "Collection of items",
          "Collection of attributes"
        ],
        "correct": 0
      },
      {
        "question": "If you need extremely fast, flexible schema DB:",
        "answers": ["RDS", "ElastiCache", "DynamoDB", "Redshift"],
        "correct": 2
      },
      {
        "question": "Appropriate use for RDS:",
        "answers": ["Huge read/write", "Simple key-value", "Complex transactions", "All of the above"],
        "correct": 2
      },
      {
        "question": "When choosing DB type consider:",
        "answers": ["Data size", "Access patterns", "Query frequency", "All of the above"],
        "correct": 3
      },
      {
        "question": "Which DB fits .NET + MySQL app needing HA and backups?",
        "answers": ["RDS", "Aurora", "DynamoDB", "Redshift"],
        "correct": 1
      },
      {
        "question": "Which is NOT an area of Performance Efficiency?",
        "answers": ["Tradeoffs", "Selection", "Traceability", "Monitoring"],
        "correct": 2
      },
      {
        "question": "Cloud design principle:",
        "answers": [
          "Build tightly-coupled",
          "Make infrequent large changes",
          "Assume everything will fail",
          "Use as many services as possible"
        ],
        "correct": 2
      },
      {
        "question": "Which are Well-Architected Framework pillars?",
        "answers": [
          "Security",
          "Persistence",
          "Operational Excellence",
          "Cost Optimization"
        ],
        "correct": [0, 2, 3]
      },
      {
        "question": "Performance efficiency principles:",
        "answers": [
          "Match supply and demand",
          "Use serverless",
          "Analyze expenditure",
          "Democratize advanced technologies",
          "Enable traceability"
        ],
        "correct": [1, 3]
      },
      {
        "question": "Trusted Advisor categories:",
        "answers": [
          "Security, FT, HA, connectivity, limits",
          "Performance, cost, security, FT, limits",
          "Performance, cost, access control, connectivity, security",
          "Security, access, HA, performance, limits"
        ],
        "correct": 1
      },
      {
        "question": "Sustainability pillar focuses on:",
        "answers": [
          "Fail recovery",
          "Reducing environmental impact",
          "Cost optimization",
          "Automating updates"
        ],
        "correct": 1
      },
      {
        "question": "Which tool helps with security compliance?",
        "answers": ["Kinesis", "AWS Support", "Trusted Advisor", "CloudWatch"],
        "correct": 2
      },
      {
        "question": "Measure of system functioning when needed:",
        "answers": ["Availability", "Fault Tolerance", "Reliability", "Performance"],
        "correct": 2
      },
      {
        "question": "Ability to remain operational despite component failure:",
        "answers": ["High durability", "Fault tolerance", "High availability"],
        "correct": 1
      },
      {
        "question": "System that withstands degradation and requires minimal intervention:",
        "answers": ["Highly available system", "Reliable system"],
        "correct": 0
      },
      {
        "question": "Which tools help scale based on demand?",
        "answers": [
          "AZs",
          "EC2 Auto Scaling",
          "CloudFormation",
          "ELB",
          "AWS Config"
        ],
        "correct": [1, 3]
      },
      {
        "question": "Which service sends alerts from CloudWatch alarms?",
        "answers": ["SNS", "CloudTrail", "Trusted Advisor", "Route 53"],
        "correct": 0
      },
      {
        "question": "Characteristics of Auto Scaling: (Choose three)",
        "answers": [
          "Only dynamic scaling",
          "Adds/terminates instances",
          "Push notifications",
          "Launches from AMI",
          "Enforces minimum instances"
        ],
        "correct": [1, 3, 4]
      },
      {
        "question": "To accept traffic, ELB requires:",
        "answers": ["Port", "Network interface", "Listener", "Instance"],
        "correct": 2
      },
      {
        "question": "Elements of Auto Scaling group: (Choose three)",
        "answers": ["Minimum size", "Health checks", "Desired capacity", "Maximum size"],
        "correct": [0, 2, 3]
      },
      {
        "question": "Which service logs all API calls?",
        "answers": ["CloudWatch", "CloudTrail", "EC2", "SNS"],
        "correct": 1
      },
      {
        "question": "What does ELB do with unhealthy targets? (Choose three)",
        "answers": [
          "Stops routing traffic",
          "Triggers an alarm",
          "Resumes routing when healthy",
          "Resumes only manually",
          "Routes to healthy targets"
        ],
        "correct": [0, 2, 4]
      },
      {
        "question": "Types of ELB load balancers: (Choose three)",
        "answers": [
          "Internet LB",
          "Application LB",
          "Network LB",
          "Compute LB",
          "Classic LB"
        ],
        "correct": [1, 2, 4]
      },
      {
        "question": "Which task is performed during the develop stage of the systems development lifecycle (SDLC)?",
        "answers": [
          "New components are obtained and installed.",
          "The system is put into use.",
          "New system requirements are defined.",
          "Deficiencies are identified."
        ],
        "correct": 0
      },
      {
        "question": "A systems administrator must grant a new developer permissions that are associated with the developer role. This role is associated with the developer group. Which AWS service should the administrator use to assign the new developer to the developer group?",
        "answers": [
          "Amazon Elastic Compute Cloud (Amazon EC2)",
          "AWS Identity and Access Management (IAM)",
          "Amazon Simple Storage Service (Amazon S3)",
          "AWS Resource Access Manager (AWS RAM)"
        ],
        "correct": 1
      },
      {
        "question": "A developer is setting up their development environment. They need an integrated development environment (IDE) that enables them to code with other people in real time. Which AWS service should they use?",
        "answers": [
          "Amazon CloudWatch",
          "AWS CloudShell",
          "Amazon CloudFront",
          "AWS Cloud9"
        ],
        "correct": 3
      },
      {
        "question": "What are three ways to interact with AWS service application programming interfaces (APIs)? (Select the THREE best options.)",
        "answers": [
          "AWS X-Ray",
          "AWS Identity and Access Management (IAM)",
          "AWS Command Line Interface (AWS CLI)",
          "AWS Management Console",
          "AWS software development kits (SDKs)",
          "AWS CloudTrail"
        ],
        "correct": [2, 3, 4]
      },
      {
        "question": "Which tools enable users to control their AWS services from the command line and automate service management with scripts? (Select THREE.)",
        "answers": [
          "AWS CodeCommit",
          "AWS Amplify",
          "AWS Cloud9",
          "AWS Serverless Application Model (AWS SAM)",
          "AWS Tools for PowerShell",
          "AWS X-Ray"
        ],
        "correct": [1, 3, 4]
      },
      {
        "question": "Which are benefits of using Amazon CodeWhisperer with AWS Cloud9? (Select TWO.)",
        "answers": [
          "Optimizes code",
          "Generates documentation",
          "Accelerates coding tasks",
          "Refactors code",
          "Enhances application security"
        ],
        "correct": [2, 4]
      },
      {
        "question": "Which statements describe AWS resource application programming interfaces (APIs)? (Select TWO.)",
        "answers": [
          "They provide a higher-level abstraction than the low-level calls made by service client APIs.",
          "They provide a lower-level abstraction than the higher-level calls made by service client APIs.",
          "They have at least one class per conceptual resource.",
          "They provide access to resources through objects and collections.",
          "They have objects for request and result data."
        ],
        "correct": [0, 3]
      },
      {
        "question": "A developer is using the AWS software development kit (SDK) for Python (Boto3) and must specify the Region. Which method enables the developer specify the Region?",
        "answers": [
          "Users cannot specify the AWS Region in the service client",
          "By associating a default Region with their profile in the credentials file in the .aws folder within their \"home\" folder",
          "By setting the Region when they instantiate the service client",
          "By setting the AWS_PROFILE environment variable"
        ],
        "correct": 2
      },
      {
        "question": "A developer makes an application programming interface (API) call to access an Amazon Simple Storage Service (Amazon S3) bucket that doesn't exist. Which HTTP response code does the developer receive from the AWS service?",
        "answers": [
          "400 series",
          "300 series",
          "500 series",
          "200 series"
        ],
        "correct": 0
      },
      {
        "question": "The systems development lifecycle (SDLC) has six phases. The first three phases are plan,define, and design. What are the last three phases of the SDLC?",
        "answers": [
          "Develop, deploy, and maintain",
          "Test, deploy, and maintain",
          "Code, build, and test",
          "Code, build, and maintain"
        ],
        "correct": 0
      },
      {
        "question": "A student is learning about Amazon Simple Storage Service (Amazon S3). During an interview, a potential employer asks the student to explain how Amazon S3 can be used as a storage solution. Which option is a use case for Amazon S3?",
        "answers": [
          "Data lake",
          "Block-level storage",
          "Shared file systems",
          "Hosting active databases"
        ],
        "correct": 0
      },
      {
        "question": "A ___ organizes the Amazon Simple Storage Service (Amazon S3) namespace at the highest level.",
        "answers": [
          "Group",
          "Container",
          "Region",
          "Bucket"
        ],
        "correct": 3
      },
      {
        "question": "A developer wants to store image files in a bucket that is called images-bucket, but receives the error BucketAlreadyExists. Which action must the developer take to resolve this error?",
        "answers": [
          "Bucket names are globally unique. If the requested bucket name is not available, the developer must rename the bucket.",
          "Bucket names go to the highest bidder. The developer must outbid the current bucket owner.",
          "Bucket names are unique to the Region that they are created in. If the requested bucket name is not available, the developer must create the images-bucket in a different Region.",
          "The developer must contact AWS Support to request approval to use the same bucket name."
        ],
        "correct": 0
      },
      {
        "question": "A developer is using Amazon Simple Storage Service (Amazon S3) to host a static website in a bucket that is called frank-martha-cafe. This bucket is in the us-east-1 Region. Which URL is the virtual-hosted-style URL for the website?",
        "answers": [
          "https://frank-martha-cafe.s3-website-us-east-1.amazonaws.com",
          "https://s3-website-us-east-1.amazonaws.com/frank-martha-cafe",
          "https://www.frank-martha-cafe.s3-website-us-east-1.amazonaws.com",
          "https://frank-martha-cafe.s3-us-east-1.amazonaws.com"
        ],
        "correct": 0
      },
      {
        "question": "After versioning is enabled on an Amazon Simple Storage Service (Amazon S3) bucket, it can be disabled.",
        "answers": [
          "True",
          "False"
        ],
        "correct": 1
      },
      {
        "question": "A developer uses an Amazon Simple Storage Service (Amazon S3) bucket. They want to allow a certain AWS Identity and Access Management (IAM) user to perform any S3 operations on the bucket and its objects. They also want to follow AWS recommendations for granting permissions. Which mechanism should the developer apply to the bucket?",
        "answers": [
          "Bucket policy",
          "Cross-Origin Resource Sharing (CORS)",
          "IAM policy",
          "Bucket access control list (ACL)"
        ],
        "correct": 0
      },
      {
        "question": "A developer wants to allow a user to download private objects directly from an Amazon Simple Storage Service (Amazon S3) bucket without needing AWS security credentials or permissions. What can the developer share with the user to grant them time-limited access to the objects?",
        "answers": [
          "A presigned URL",
          "The bucket endpoint URL",
          "A temporary token",
          "Their AWS account root user credentials"
        ],
        "correct": 0
      },
      {
        "question": "Which method can be used to encrypt Amazon Simple Storage Service (Amazon S3) objects in transit?",
        "answers": [
          "Server-Side Encryption with Amazon S3-Managed Keys (SSE-S3)",
          "Server-Side Encryption with AWS KMS-Managed Keys (SSE-KMS)",
          "Server-Side Encryption with Customer-Provided Keys (SSE-C)",
          "Secure Sockets Layer/Transport Layer Security (SSL/TLS)"
        ],
        "correct": 3
      },
      {
        "question": "A developer hosts a static website in an Amazon Simple Storage Service (Amazon S3) bucket. The website references image objects in another S3 bucket. However, these images do not display on the website. What could be the problem?",
        "answers": [
          "Cross-Origin Resource Sharing (CORS) has not been enabled on the bucket where the assets are stored.",
          "The security group of the S3 bucket does not include an inbound rule to allow HTTP traffic on port 80.",
          "Amazon S3 does not support object sharing between buckets.",
          "Cross-Region Replication (CRR) has not been enabled on the bucket where the assets are stored."
        ],
        "correct": 0
      },
      {
        "question": "What is the largest size of an object that a user can upload to Amazon Simple Storage Service (Amazon S3) in a single PUT operation?",
        "answers": [
          "1 GB",
          "100 MB",
          "5 GB",
          "5 TB"
        ],
        "correct": 2
      },
      {
        "question": "Which AWS Identity and Access Management (IAM) resource explicitly grants or denies permissions to a user or group of users?",
        "answers": [
          "IAM roles",
          "IAM users",
          "IAM groups",
          "IAM policies"
        ],
        "correct": 3
      },
      {
        "question": "Which statements about IAM user authentication are true? (Select TWO.)",
        "answers": [
          "AWS credentials to authenticate with any supported services must be provided.",
          "A user name and password to authenticate to the console must be provided.",
          "A .pem or .ppk file is used to authenticate programmatically to the AWS application programming interface (API).",
          "It is a best practice to use the account root user credentials to authenticate programmatically by using the AWS Command Line Interface (AWS CLI).",
          "Each AWS account can have only one administrator who manages other IAM users."
        ],
        "correct": [1, 2]
      },
      {
        "question": "Which suggestion is an Amazon Web Services (AWS) recommendation for securing AWS credentials for applications that run on Amazon Elastic Compute Cloud (Amazon EC2) instances?",
        "answers": [
          "Embed AWS credentials in the software development kit (SDK) client code.",
          "Store credentials in local AWS configuration files.",
          "Create an AWS Identity and Access Management (IAM) role and attach it to the EC2 instance.",
          "Create an AWS Identity and Access Management (IAM) user and attach it to the EC2 instance."
        ],
        "correct": 2
      },
      {
        "question": "What is the format of AWS Identity and Access Management (IAM) policies that define the allowable API calls an entity can invoke?",
        "answers": [
          "YAML Aint Markup Language (YAML)",
          "Security Assertion Markup Language (SAML)",
          "Comma-separated values (CSV)",
          "JavaScript Object Notation (JSON)"
        ],
        "correct": 3
      },
      {
        "question": "An administrator created an AWS Identity and Access Management (IAM) group called managers within an AWS account. A ___ policy is attached to the managers group. It allows managers to read from and write to an Amazon Simple Storage Service (Amazon S3) bucket in the same AWS account. What is this type of policy?",
        "answers": [
          "Identity-based",
          "Resource-based",
          "Cross-account access",
          "AdministratorAccess managed"
        ],
        "correct": 0
      },
      {
        "question": "Which statement reflects best practices when granting permissions to users, groups, roles, and resources?",
        "answers": [
          "Create policies that allow broad access and then limit permissions as needed, based on usage.",
          "Use the account root user for routine tasks that the administrator performs.",
          "Create policies that follow the principle of least privilege.",
          "Do not set policies for individual resources."
        ],
        "correct": 2
      },
      {
        "question": "What is the effect of the following policy statement?\n\nEffect: \"Deny\", \"Action\": [ \"dynamodb:*\", \"s3:*\" ]\nNotResource\": [ \"arn:aws:dynamodb:region:account-number:table/pollynotes\", \"arn:aws:s3:::polly-notes-web\", \"arn:aws:s3:::polly-notes-mp3/*\" ]",
        "answers": [
          "Denies actions on DynamoDB or Amazon S3 resources except for the resources that are listed in the NotResource element",
          "Denies the ability to write to the pollynotes DynamoDB table",
          "Denies the ability to read from the polly-notes-web S3 bucket",
          "Denies actions on the DynamoDB table or S3 buckets that are listed in the NotResources element"
        ],
        "correct": 0
      },
      {
        "question": "Which statements are true about evaluation logic for AWS Identity and Access Management (IAM) policies? (Select TWO.)",
        "answers": [
          "You cannot have deny and allow statements in the same policy.",
          "An explicit allow overrides an explicit deny.",
          "An explicit deny overrides an explicit allow.",
          "By default, all requests are denied.",
          "By default, all requests are allowed."
        ],
        "correct": [2, 3]
      },
      {
        "question": "Which option is the Amazon Web Services (AWS) customer responsible for under the AWS shared responsibility model? (Select TWO.)",
        "answers": [
          "Security group configuration",
          "Physical servers",
          "Client-side data",
          "Edge location infrastructure",
          "Availability Zone security"
        ],
        "correct": [0, 2]
      },
      {
        "question": "What is the correct term for the process of verifying a user's identity as a developer?",
        "answers": [
          "Endorsement",
          "Authentication",
          "Confirmation",
          "Authorization"
        ],
        "correct": 1
      },
      {
        "question": "Which component is part of an Amazon DynamoDB table?",
        "answers": [
          "Predefined schema",
          "SQL-based queries",
          "Attributes",
          "Columns"
        ],
        "correct": 2
      },
      {
        "question": "An Amazon DynamoDB table called SensorReadings captures sensor readings. These readings include a sensor ID attribute that acts as the partition key, and a timestamp attribute that is the sort key. Which statement is true?",
        "answers": [
          "The sensor ID together with the timestamp represent a simple primary key.",
          "It is impossible for two items in the SensorReadings table to have the same partition key.",
          "It is impossible for two items in the SensorReadings table to have the same sort key.",
          "It is impossible for two items in the SensorReadings table to have the same primary key."
        ],
        "correct": 3
      },
      {
        "question": "Which statement about Amazon DynamoDB partitions is true?",
        "answers": [
          "DynamoDB stores data in partitions and chooses the partition based on the range attribute.",
          "If a table has a simple primary key (partition key only), DynamoDB stores and retrieves each item based on its hash attribute.",
          "If a table has a composite primary key, DynamoDB will sort the items based on the sort key before selecting the partition for the item.",
          "A developer writes a hash function to tell DynamoDB how to partition the items."
        ],
        "correct": 1
      },
      {
        "question": "Suppose that a developer has a restaurants database table that can be queried by name (the partition key), or by name and location (the sort key). What should the developer do if they also want to query by type of cuisine and average customer rating?",
        "answers": [
          "Set up a local secondary index on cuisine and customer rating.",
          "Set up a global secondary index on cuisine and customer rating.",
          "Change the primary key on the restaurant table to be a complex primary key based on cuisine and customer rating.",
          "Perform a query that uses the cuisine and average customer rating attributes."
        ],
        "correct": 1
      },
      {
        "question": "A video game developer who uses Amazon DynamoDB wants to ensure that players' profiles are updated correctly when they make in-game purchases. This process requires multiple updates as part of a single user action. What is the best choice to write this developer's application to manage these complex, all-or-nothing changes?",
        "answers": [
          "Add an Amazon DynamoDB Accelerator (DAX) cluster.",
          "Implement global tables.",
          "Create application code to check that all parts of the transaction were written successfully, and then roll back the update if any part failed.",
          "Use DynamoDB transactions."
        ],
        "correct": 3
      },
      {
        "question": "Which scenarios are example use cases for Amazon DynamoDB Streams? (Select TWO.)",
        "answers": [
          "An application that requires the fastest possible response time for reads to support real-time bidding",
          "An application that requires repeated reads against a large set of regional weather data to perform a long-running analysis",
          "An application that automatically sends notifications to the mobile devices of all friends in a group when one friend uploads a new picture",
          "An application that must monitor changes to a DynamoDB table and take action on specific changes when a value reaches a certain threshold",
          "An application that requires an in-memory data store"
        ],
        "correct": [2, 3]
      },
      {
        "question": "Which statement about global tables is true?",
        "answers": [
          "Global tables provide a managed solution for replicating tables within a single AWS Region.",
          "Global tables use Amazon Simple Storage Service (Amazon S3) to propagate changes between replicas.",
          "When a global table is created, Amazon DynamoDB performs all necessary tasks to create identical tables and propagate ongoing data changes to specified Regions.",
          "With a global table, Amazon DynamoDB supports partial replication of some of the items in a table."
        ],
        "correct": 2
      },
      {
        "question": "How far back in days can an Amazon DynamoDB table be restored by using point-in-time recovery?",
        "answers": [
          "The last week",
          "The last 10 days",
          "The last 35 days",
          "The last calendar month"
        ],
        "correct": 2
      },
      {
        "question": "Which statement describes Amazon DynamoDB application programming interface (API) control operations that can be invoked by an application?",
        "answers": [
          "Create and manage DynamoDB tables.",
          "Create, read, update, and delete data in a table.",
          "Get and write batches of items in a DynamoDB table.",
          "Make coordinated, all-or-nothing changes to multiple items both within and across tables."
        ],
        "correct": 0
      },
      {
        "question": "Which statement best describes Amazon DynamoDB?",
        "answers": [
          "An in-memory data store that can boost the performance of databases",
          "A graph database engine that is optimized for storing billions of relationships",
          "A relational database that is built for the cloud and is compatible with MySQL and PostgreSQL",
          "A key-value and document database that scales horizontally and works well for internet-scale applications"
        ],
        "correct": 3
      },
      {
        "question": "Which phrase best describes a RESTful API?",
        "answers": [
          "An API that uses HTTP to communicate between client and server",
          "A proxy that exists between client and server to handle common problems that occur with API-driven applications",
          "An API that follows the principles of the Representational State Transfer style",
          "An API that resides on the web server"
        ],
        "correct": 2
      },
      {
        "question": "Which option suggests the use of WebSocket APIs?",
        "answers": [
          "An order processing application returns an order number to each customer when they submit an order.",
          "A batch process bundles orders and sends them to a fulfillment center application.",
          "A real-time chat application lets customers talk to customer support about their orders.",
          "A reporting application gives the sales team access to static daily reports from their phones."
        ],
        "correct": 2
      },
      {
        "question": "Which use case suggests using Amazon API Gateway HTTP APIs?",
        "answers": [
          "An application needs an API proxy in front of an AWS Lambda function.",
          "An application must transform a response from an AWS Lambda function before returning the response to the client.",
          "A developer wants to use mock endpoints to test their API.",
          "A developer wants to assign different API quotas by client."
        ],
        "correct": 0
      },
      {
        "question": "Which statement about Amazon API Gateway integrations is true?",
        "answers": [
          "A first-class integration connects an API Gateway HTTP API route to an external third-party service API.",
          "A developer can use HTTP proxy integrations to direct a route to a resource on the internet.",
          "API Gateway cannot access resources within a virtual private cloud (VPC).",
          "An API integration request encapsulates an HTTP request that the backend receives and is always different from the method request that the client submits."
        ],
        "correct": 1
      },
      {
        "question": "An application that uses Amazon API Gateway must capture contact information from a third-party client application. The client application sends given name, surname, business phone, and cell phone. The backend application database has only two fields: name and mobile phone. Which option requires the fewest application changes?",
        "answers": [
          "Export the API definition and use it to update the client.",
          "Use a mapping template to transform the request before it is sent to the database.",
          "Create a usage plan that describes the fields and applies only to this client.",
          "Use a first-class integration to connect the client to the database."
        ],
        "correct": 1
      },
      {
        "question": "Which elements are part of the base URI that AWS generates for an Amazon API Gateway API?",
        "answers": [
          "Region and stage name",
          "API identifier and version",
          "Account ID and stage name",
          "Region and version"
        ],
        "correct": 0
      },
      {
        "question": "Given this snippet:\naws apigatewayv2 create-route \\\n--api-id 032501670a \\\n--target arn:aws:lambda:us-east-2:AcctID:function:readFn\n\nWhich option could replace the <?> to create an API route that returns an individual product value from an online catalog?",
        "answers": [
          "route-key 'GET /products/{product_id}' \\",
          "route-key 'PUT /products' \\",
          "route-selection-expression '$GET/product' \\",
          "route-selection-expression 'PUT /products/{proxy+}' \\"
        ],
        "correct": 0
      },
      {
        "question": "Which statement about Amazon API Gateway stages is true?",
        "answers": [
          "Stage names are sequentially assigned based on the API version.",
          "Any stage on any API type can be set to autodeploy.",
          "Developers can use stage variables to connect different stages to different backends.",
          "Developers should avoid creating different stages for each development environment."
        ],
        "correct": 2
      },
      {
        "question": "A security team wants to know how to protect APIs in their internet application from common web exploits, like SQL injection or cross-site scripting. Which solution most directly addresses their specific concern?",
        "answers": [
          "Set throttling limits on their API methods in Amazon API Gateway.",
          "Set all of their APIs to use private endpoints.",
          "Configure a JSON Web Token (JWT)-based authorizer for Amazon API Gateway.",
          "Use AWS WAF with Amazon API Gateway."
        ],
        "correct": 3
      },
      {
        "question": "What does the Amazon API Gateway integration Latency metric tell the user?",
        "answers": [
          "Frequency of server-side errors that affect latency",
          "Speed of the API response back to the client",
          "Responsiveness of the backend",
          "How often requests are throttled"
        ],
        "correct": 2
      }
    ]
  },

  

  {
    "id": 1,
    "title": "AWS Module 1 - Cloud Concepts",
    "questions": [
      {
        "question": "What are the advantages of cloud computing over computing on premises?",
        "answers": [
          "Avoid large capital purchase",
          "Use on-demand capacity",
          "Go global in minutes",
          "Increase speed and agility",
          "All of the above"
        ],
        "correct": 4
      },
      {
        "question": "What is the pricing model that enables AWS customers to pay for resources on an as-needed basis?",
        "answers": [
          "Pay as you decommission",
          "Pay as you go",
          "Pay as you buy",
          "Pay as you reserve"
        ],
        "correct": 1
      },
      {
        "question": "Which of these is NOT a cloud computing model?",
        "answers": [
          "Platform as a service",
          "Infrastructure as a service",
          "System Administration as a service",
          "Software as a service"
        ],
        "correct": 2
      },
      {
        "question": "True or False? AWS owns and maintains the hardware while you provision and use what you need.",
        "answers": ["True", "False"],
        "correct": 0
      },
      {
        "question": "Which is NOT a primary benefit of cloud computing?",
        "answers": [
          "Increase speed and agility",
          "Pay for racking, stacking and powering servers",
          "Eliminate capacity guessing",
          "Trade capital expense for variable expense"
        ],
        "correct": 1
      },
      {
        "question": "Which are NOT benefits of AWS Cloud computing? (Choose two)",
        "answers": [
          "Multiple procurement cycles",
          "High-availability",
          "High-latency",
          "Temporary resources",
          "Fault-tolerant databases"
        ],
        "correct": [0, 2]
      },
      {
        "question": "Which of the following is a compute service?",
        "answers": ["Amazon VPC", "Amazon S3", "Amazon EC2", "Amazon CloudFront", "Amazon Redshift"],
        "correct": 2
      },
      {
        "question": "True or False? You own the hardware and AWS provisions what you need.",
        "answers": ["True", "False"],
        "correct": 1
      },
      {
        "question": "Economies of scale result from:",
        "answers": [
          "Many cloud providers",
          "Hundreds of thousands of customers aggregated",
          "Many cloud services",
          "Heavy investment in datacenters"
        ],
        "correct": 1
      },
      {
        "question": "Which are ways to access AWS services? (Choose three)",
        "answers": [
          "Technical support calls",
          "AWS Marketplace",
          "AWS Management Console",
          "AWS CLI",
          "AWS SDKs"
        ],
        "correct": [2, 3, 4]
      }
    ]
  },

  {
    "id": 2,
    "title": "AWS Module 2 - Pricing & Support",
    "questions": [
      {
        "question": "Which reserved instance options exist? (Choose three)",
        "answers": ["AURI", "MURI", "NURI", "PURI", "DURI"],
        "correct": [0, 2, 3]
      },
      {
        "question": "Where can a customer get detailed EC2 billing data from 3 months ago?",
        "answers": [
          "EC2 Dashboard",
          "AWS Cost Explorer",
          "Trusted Advisor",
          "CloudTrail logs in S3"
        ],
        "correct": 1
      },
      {
        "question": "True or False? To receive RI discounts you must pay full upfront.",
        "answers": ["True", "False"],
        "correct": 1
      },
      {
        "question": "Which statement is true about AWS pricing?",
        "answers": [
          "Inbound transfer has per GB charge",
          "Storage is charged per GB",
          "Compute is billed monthly",
          "Outbound is free up to a limit"
        ],
        "correct": 1
      },
      {
        "question": "Which support plans exist?",
        "answers": [
          "Basic, Developer, Business, Enterprise",
          "Basic, Startup, Business, Enterprise",
          "Free, Bronze, Silver, Gold",
          "All support is free"
        ],
        "correct": 0
      },
      {
        "question": "Which AWS tool lets you estimate AWS costs?",
        "answers": [
          "AWS Pricing Calculator",
          "AWS Budgets",
          "Cost & Usage Report",
          "Billing Dashboard"
        ],
        "correct": 0
      },
      {
        "question": "What is it called when AWS reduces costs as it grows?",
        "answers": ["Expenditure awareness", "Economies of scale", "Matching supply/demand", "Right sizing"],
        "correct": 1
      },
      {
        "question": "True or False? Many AWS services are free, but you may pay for what they use.",
        "answers": ["True", "False"],
        "correct": 0
      },
      {
        "question": "Which are benefits of AWS Organizations? (Choose two)",
        "answers": [
          "Replaces IAM with SCPs",
          "Groups accounts and attaches policies",
          "Unlimited nested OUs",
          "Automates account creation",
          "Removes root user limits"
        ],
        "correct": [1, 3]
      },
      {
        "question": "True or False? AWS Free Tier provides unlimited access for 12 months.",
        "answers": ["True", "False"],
        "correct": 1
      }
    ]
  },

  {
    "id": 3,
    "title": "AWS Module 3 - Global Infrastructure",
    "questions": [
      {
        "question": "Which component does CloudFront use for low latency?",
        "answers": ["Regions", "Edge Locations", "AZs", "VPC"],
        "correct": 1
      },
      {
        "question": "Running workloads closer to users __________ latency.",
        "answers": ["Increases", "Decreases"],
        "correct": 1
      },
      {
        "question": "Networking, storage, compute, and databases are AWS service categories.",
        "answers": ["True", "False"],
        "correct": 0
      },
      {
        "question": "Which geographic areas host 2+ Availability Zones?",
        "answers": ["Origins", "Regions", "Compute Zones", "Edge Locations"],
        "correct": 1
      },
      {
        "question": "_______ means redundancy and _______ means dynamic capacity.",
        "answers": [
          "Fault tolerant, elastic and scalable",
          "No human intervention, fault tolerant",
          "Elastic and scalable, no human intervention",
          "Fault tolerant, no human intervention"
        ],
        "correct": 0
      },
      {
        "question": "True or False? AZs within a Region have low-latency links.",
        "answers": ["True", "False"],
        "correct": 0
      },
      {
        "question": "Which statement about AZs is NOT true?",
        "answers": [
          "Designed for fault isolation",
          "Made of one or more data centers",
          "A data center can be used for multiple AZs",
          "Connected via high-speed private links"
        ],
        "correct": 2
      },
      {
        "question": "What is true about Regions? (Choose two)",
        "answers": [
          "They are physical locations of customers",
          "Each Region has multiple AZs",
          "All Regions in one geographic area",
          "Each Region is in a separate geographic area"
        ],
        "correct": [1, 3]
      },
      {
        "question": "AWS recommends spreading compute across ______ AZs.",
        "answers": ["All", "Multiple", "Single", "None"],
        "correct": 1
      },
      {
        "question": "Edge locations are only located near Regions.",
        "answers": ["True", "False"],
        "correct": 1
      }
    ]
  },

  {
    "id": 4,
    "title": "AWS Module 4 - Security",
    "questions": [
      {
        "question": "In the shared responsibility model, AWS handles:",
        "answers": [
          "Security OF the cloud",
          "Security TO the cloud",
          "Security FOR the cloud",
          "Security IN the cloud"
        ],
        "correct": 0
      },
      {
        "question": "Which are examples of security IN the cloud? (Choose two)",
        "answers": [
          "Compliance with security standards",
          "Physical datacenter security",
          "Security groups",
          "Data encryption",
          "Protecting global infrastructure"
        ],
        "correct": [2, 3]
      },
      {
        "question": "Which is AWS responsible for?",
        "answers": [
          "Configuring third-party apps",
          "Maintaining physical hardware",
          "Security of app access",
          "Managing custom AMIs"
        ],
        "correct": 1
      },
      {
        "question": "IAM policies grant which access types? (Choose two)",
        "answers": [
          "Institutional Access",
          "Authorized Access",
          "Programmatic Access",
          "Console Access",
          "Root Administrative Access"
        ],
        "correct": [2, 3]
      },
      {
        "question": "AWS Organizations consolidates AWS accounts.",
        "answers": ["True", "False"],
        "correct": 0
      },
      {
        "question": "Which are IAM security best practices? (Choose two)",
        "answers": [
          "Give admin privileges by default",
          "Leave unused accounts",
          "Manage access",
          "Avoid IAM groups",
          "Use fine-grained permissions"
        ],
        "correct": [2, 4]
      },
      {
        "question": "What should only the root user do?",
        "answers": [
          "Secure applications",
          "Integrate AWS services",
          "Change granular permissions",
          "Change support plan"
        ],
        "correct": 3
      },
      {
        "question": "Best practice for root user after initial login?",
        "answers": [
          "Delete root user",
          "Revoke all permissions",
          "Restrict permissions",
          "Delete root access keys"
        ],
        "correct": 3
      },
      {
        "question": "How to add extra login security for IAM users?",
        "answers": ["Cloud Directory", "Audit IAM roles", "Enable MFA", "Enable CloudTrail"],
        "correct": 2
      },
      {
        "question": "AWS KMS helps audit AWS configurations.",
        "answers": ["True", "False"],
        "correct": 1
      }
    ]
  },

  {
    "id": 5,
    "title": "AWS Module 5 - Networking & VPC",
    "questions": [
      {
        "question": "Smallest subnet in a VPC?",
        "answers": ["/28", "/26", "/30", "/24"],
        "correct": 0
      },
      {
        "question": "Largest IP range for a VPC?",
        "answers": ["/24", "/16", "/28", "/30"],
        "correct": 1
      },
      {
        "question": "To allow private subnet resources internet access, you need:",
        "answers": ["Security groups", "Route tables", "NAT gateway", "NACLs"],
        "correct": 2
      },
      {
        "question": "Which service creates a virtual network?",
        "answers": ["VPC", "AWS Config", "Route 53", "Direct Connect"],
        "correct": 0
      },
      {
        "question": "Private subnets have direct internet access.",
        "answers": ["True", "False"],
        "correct": 1
      },
      {
        "question": "CloudFront uses what for low latency?",
        "answers": ["VPC", "AZs", "Regions", "Edge Locations"],
        "correct": 3
      },
      {
        "question": "Optional security at subnet layer?",
        "answers": ["Firewall", "Network ACL", "WAF", "Security group"],
        "correct": 1
      },
      {
        "question": "What is created by default when you create a VPC?",
        "answers": [
          "Internet gateway",
          "3 subnets",
          "Subnets per AZ",
          "Main route table"
        ],
        "correct": 3
      },
      {
        "question": "What protects EC2 instances?",
        "answers": ["AMI", "All of the above", "Security group", "Internet gateway"],
        "correct": 2
      },
      {
        "question": "If VPC is 10.0.1.0/24, how many IPs available?",
        "answers": ["246", "251", "256", "250"],
        "correct": 1
      }
    ]
  },

  {
    "id": 6,
    "title": "AWS Module 6 - Compute",
    "questions": [
      {
        "question": "Why is AWS more economical for variable workloads?",
        "answers": [
          "EC2 billed monthly",
          "Full admin access",
          "Run peak capacity always",
          "Launch EC2 on-demand"
        ],
        "correct": 3
      },
      {
        "question": "For monthly large data reports, choose:",
        "answers": [
          "Spot instances",
          "Scheduled RIs",
          "Dedicated Hosts",
          "On-Demand"
        ],
        "correct": 1
      },
      {
        "question": "An AMI includes:",
        "answers": [
          "Root volume template",
          "Launch permissions",
          "Block device mapping",
          "All of the above"
        ],
        "correct": 3
      },
      {
        "question": "Which EC2 feature ensures no shared physical host?",
        "answers": [
          "VPC",
          "Placement groups",
          "Dedicated Instances",
          "Reserved Instances"
        ],
        "correct": 2
      },
      {
        "question": "Which is serverless compute?",
        "answers": ["AWS Config", "Lambda", "OpsWorks", "EC2"],
        "correct": 1
      },
      {
        "question": "Service for easy deployment of applications?",
        "answers": ["ECS", "Elastic Beanstalk", "OpsWorks", "CloudFormation"],
        "correct": 1
      },
      {
        "question": "Traffic triples once a month. Best option?",
        "answers": [
          "Run 12 RIs always",
          "Run 4 on-demand and add 8 on-demand",
          "Run 4 RIs and add 8 on-demand as needed",
          "Run 4 on-demand and add 8 reserved"
        ],
        "correct": 2
      },
      {
        "question": "Containers contain a full OS.",
        "answers": ["True", "False"],
        "correct": 1
      },
      {
        "question": "Best EC2 option for predictable long-term workloads?",
        "answers": ["Spot", "On-demand", "Reserved"],
        "correct": 2
      },
      {
        "question": "When launching EC2 Windows, you must specify: (Choose two)",
        "answers": [
          "Instance type",
          "AMI",
          "Instance ID",
          "Admin password"
        ],
        "correct": [0, 1]
      }
    ]
  },

  {
    "id": 7,
    "title": "AWS Module 7 - Storage",
    "questions": [
      {
        "question": "S3 is suitable for flat files like documents and photos.",
        "answers": ["True", "False"],
        "correct": 0
      },
      {
        "question": "S3 replicates objects:",
        "answers": [
          "Within a single AZ",
          "Across multiple AZs",
          "Across Regions",
          "Across multiple buckets"
        ],
        "correct": 1
      },
      {
        "question": "Valid storage classes for lifecycle rules:",
        "answers": [
          "S3 Standard",
          "Storage Gateway",
          "S3 IA",
          "Glacier",
          "RRS",
          "DynamoDB"
        ],
        "correct": [0, 2, 3]
      },
      {
        "question": "S3 bucket names must be unique:",
        "answers": [
          "Worldwide",
          "Within region",
          "Across your accounts",
          "Within your account"
        ],
        "correct": 0
      },
      {
        "question": "EFS can be used to:",
        "answers": [
          "Provide storage only inside AWS",
          "Provide shared storage for EC2",
          "Host CDN",
          "Generate user content"
        ],
        "correct": 1
      },
      {
        "question": "EBS recommended when data: (Choose two)",
        "answers": [
          "Requires object storage",
          "Must be quickly accessible",
          "Requires encryption",
          "Stored in another AZ"
        ],
        "correct": [1, 2]
      },
      {
        "question": "By default, S3 data is publicly viewable.",
        "answers": ["True", "False"],
        "correct": 1
      },
      {
        "question": "In S3 Glacier, what is a vault?",
        "answers": [
          "Access rules",
          "An object",
          "A container for archives",
          "A permission policy"
        ],
        "correct": 2
      },
      {
        "question": "S3 buckets are associated with a specific region.",
        "answers": ["True", "False"],
        "correct": 0
      },
      {
        "question": "Which are EBS features? (Choose two)",
        "answers": [
          "Data lost when stopped",
          "Encrypted transparently",
          "Backed up to tape",
          "Replicated within AZ"
        ],
        "correct": [1, 3]
      }
    ]
  },

  {
    "id": 8,
    "title": "AWS Module 8 - Databases",
    "questions": [
      {
        "question": "Best DB for storing session state for huge user load?",
        "answers": ["RDS", "DynamoDB", "Redshift", "S3"],
        "correct": 1
      },
      {
        "question": "RDS patches DB software and performs backups automatically.",
        "answers": ["True", "False"],
        "correct": 0
      },
      {
        "question": "Find an item in DynamoDB using non-primary attribute:",
        "answers": ["PutItem", "Scan", "Query", "GetItem"],
        "correct": 1
      },
      {
        "question": "Query operation allows:",
        "answers": [
          "Query by partition key",
          "Query secondary indexes",
          "Efficient retrieval",
          "All of the above"
        ],
        "correct": 3
      },
      {
        "question": "Best service for SQL analytics?",
        "answers": ["RDS", "Glacier", "DynamoDB", "Redshift"],
        "correct": 3
      },
      {
        "question": "In DynamoDB, an attribute is:",
        "answers": [
          "Fundamental data element",
          "Collection of items",
          "Collection of attributes"
        ],
        "correct": 0
      },
      {
        "question": "If you need extremely fast, flexible schema DB:",
        "answers": ["RDS", "ElastiCache", "DynamoDB", "Redshift"],
        "correct": 2
      },
      {
        "question": "Appropriate use for RDS:",
        "answers": ["Huge read/write", "Simple key-value", "Complex transactions", "All of the above"],
        "correct": 2
      },
      {
        "question": "When choosing DB type consider:",
        "answers": ["Data size", "Access patterns", "Query frequency", "All of the above"],
        "correct": 3
      },
      {
        "question": "Which DB fits .NET + MySQL app needing HA and backups?",
        "answers": ["RDS", "Aurora", "DynamoDB", "Redshift"],
        "correct": 1
      }
    ]
  },

  {
    "id": 9,
    "title": "AWS Module 9 - Well-Architected Framework",
    "questions": [
      {
        "question": "Which is NOT an area of Performance Efficiency?",
        "answers": ["Tradeoffs", "Selection", "Traceability", "Monitoring"],
        "correct": 2
      },
      {
        "question": "Cloud design principle:",
        "answers": [
          "Build tightly-coupled",
          "Make infrequent large changes",
          "Assume everything will fail",
          "Use as many services as possible"
        ],
        "correct": 2
      },
      {
        "question": "Which are Well-Architected Framework pillars?",
        "answers": [
          "Security",
          "Persistence",
          "Operational Excellence",
          "Cost Optimization"
        ],
        "correct": [0, 2, 3]
      },
      {
        "question": "Performance efficiency principles:",
        "answers": [
          "Match supply and demand",
          "Use serverless",
          "Analyze expenditure",
          "Democratize advanced technologies",
          "Enable traceability"
        ],
        "correct": [1, 3]
      },
      {
        "question": "Trusted Advisor categories:",
        "answers": [
          "Security, FT, HA, connectivity, limits",
          "Performance, cost, security, FT, limits",
          "Performance, cost, access control, connectivity, security",
          "Security, access, HA, performance, limits"
        ],
        "correct": 1
      },
      {
        "question": "Sustainability pillar focuses on:",
        "answers": [
          "Fail recovery",
          "Reducing environmental impact",
          "Cost optimization",
          "Automating updates"
        ],
        "correct": 1
      },
      {
        "question": "Which tool helps with security compliance?",
        "answers": ["Kinesis", "AWS Support", "Trusted Advisor", "CloudWatch"],
        "correct": 2
      },
      {
        "question": "Measure of system functioning when needed:",
        "answers": ["Availability", "Fault Tolerance", "Reliability", "Performance"],
        "correct": 2
      },
      {
        "question": "Ability to remain operational despite component failure:",
        "answers": ["High durability", "Fault tolerance", "High availability"],
        "correct": 1
      },
      {
        "question": "System that withstands degradation and requires minimal intervention:",
        "answers": ["Highly available system", "Reliable system"],
        "correct": 0
      }
    ]
  },

  {
    "id": 10,
    "title": "AWS Module 10 - Monitoring & Scaling",
    "questions": [
      {
        "question": "Which tools help scale based on demand?",
        "answers": [
          "AZs",
          "EC2 Auto Scaling",
          "CloudFormation",
          "ELB",
          "AWS Config"
        ],
        "correct": [1, 3]
      },
      {
        "question": "Which service sends alerts from CloudWatch alarms?",
        "answers": ["SNS", "CloudTrail", "Trusted Advisor", "Route 53"],
        "correct": 0
      },
      {
        "question": "Characteristics of Auto Scaling: (Choose three)",
        "answers": [
          "Only dynamic scaling",
          "Adds/terminates instances",
          "Push notifications",
          "Launches from AMI",
          "Enforces minimum instances"
        ],
        "correct": [1, 3, 4]
      },
      {
        "question": "To accept traffic, ELB requires:",
        "answers": ["Port", "Network interface", "Listener", "Instance"],
        "correct": 2
      },
      {
        "question": "Elements of Auto Scaling group: (Choose three)",
        "answers": ["Minimum size", "Health checks", "Desired capacity", "Maximum size"],
        "correct": [0, 2, 3]
      },
      {
        "question": "Which service logs all API calls?",
        "answers": ["CloudWatch", "CloudTrail", "EC2", "SNS"],
        "correct": 1
      },
      {
        "question": "What does ELB do with unhealthy targets? (Choose three)",
        "answers": [
          "Stops routing traffic",
          "Triggers an alarm",
          "Resumes routing when healthy",
          "Resumes only manually",
          "Routes to healthy targets"
        ],
        "correct": [0, 2, 4]
      },
      {
        "question": "Types of ELB load balancers: (Choose three)",
        "answers": [
          "Internet LB",
          "Application LB",
          "Network LB",
          "Compute LB",
          "Classic LB"
        ],
        "correct": [1, 2, 4]
      }
    ]
  },

  {
    "id": 11,
    "title": "AWS Module 2 - Development Tools and SDLC",
    "questions": [
      {
        "question": "Which task is performed during the develop stage of the systems development lifecycle (SDLC)?",
        "answers": [
          "New components are obtained and installed.",
          "The system is put into use.",
          "New system requirements are defined.",
          "Deficiencies are identified."
        ],
        "correct": 0
      },
      {
        "question": "A systems administrator must grant a new developer permissions that are associated with the developer role. This role is associated with the developer group. Which AWS service should the administrator use to assign the new developer to the developer group?",
        "answers": [
          "Amazon Elastic Compute Cloud (Amazon EC2)",
          "AWS Identity and Access Management (IAM)",
          "Amazon Simple Storage Service (Amazon S3)",
          "AWS Resource Access Manager (AWS RAM)"
        ],
        "correct": 1
      },
      {
        "question": "A developer is setting up their development environment. They need an integrated development environment (IDE) that enables them to code with other people in real time. Which AWS service should they use?",
        "answers": [
          "Amazon CloudWatch",
          "AWS CloudShell",
          "Amazon CloudFront",
          "AWS Cloud9"
        ],
        "correct": 3
      },
      {
        "question": "What are three ways to interact with AWS service application programming interfaces (APIs)? (Select the THREE best options.)",
        "answers": [
          "AWS X-Ray",
          "AWS Identity and Access Management (IAM)",
          "AWS Command Line Interface (AWS CLI)",
          "AWS Management Console",
          "AWS software development kits (SDKs)",
          "AWS CloudTrail"
        ],
        "correct": [2, 3, 4]
      },
      {
        "question": "Which tools enable users to control their AWS services from the command line and automate service management with scripts? (Select THREE.)",
        "answers": [
          "AWS CodeCommit",
          "AWS Amplify",
          "AWS Cloud9",
          "AWS Serverless Application Model (AWS SAM)",
          "AWS Tools for PowerShell",
          "AWS X-Ray"
        ],
        "correct": [1, 3, 4]
      },
      {
        "question": "Which are benefits of using Amazon CodeWhisperer with AWS Cloud9? (Select TWO.)",
        "answers": [
          "Optimizes code",
          "Generates documentation",
          "Accelerates coding tasks",
          "Refactors code",
          "Enhances application security"
        ],
        "correct": [2, 4]
      },
      {
        "question": "Which statements describe AWS resource application programming interfaces (APIs)? (Select TWO.)",
        "answers": [
          "They provide a higher-level abstraction than the low-level calls made by service client APIs.",
          "They provide a lower-level abstraction than the higher-level calls made by service client APIs.",
          "They have at least one class per conceptual resource.",
          "They provide access to resources through objects and collections.",
          "They have objects for request and result data."
        ],
        "correct": [0, 3]
      },
      {
        "question": "A developer is using the AWS software development kit (SDK) for Python (Boto3) and must specify the Region. Which method enables the developer specify the Region?",
        "answers": [
          "Users cannot specify the AWS Region in the service client",
          "By associating a default Region with their profile in the credentials file in the .aws folder within their \"home\" folder",
          "By setting the Region when they instantiate the service client",
          "By setting the AWS_PROFILE environment variable"
        ],
        "correct": 2
      },
      {
        "question": "A developer makes an application programming interface (API) call to access an Amazon Simple Storage Service (Amazon S3) bucket that doesn't exist. Which HTTP response code does the developer receive from the AWS service?",
        "answers": [
          "400 series",
          "300 series",
          "500 series",
          "200 series"
        ],
        "correct": 0
      },
      {
        "question": "The systems development lifecycle (SDLC) has six phases. The first three phases are plan,define, and design. What are the last three phases of the SDLC?",
        "answers": [
          "Develop, deploy, and maintain",
          "Test, deploy, and maintain",
          "Code, build, and test",
          "Code, build, and maintain"
        ],
        "correct": 0
      }
    ]
  },
  {
    "id": 12,
    "title": "AWS Module 3 - Amazon S3 Storage",
    "questions": [
      {
        "question": "A student is learning about Amazon Simple Storage Service (Amazon S3). During an interview, a potential employer asks the student to explain how Amazon S3 can be used as a storage solution. Which option is a use case for Amazon S3?",
        "answers": [
          "Data lake",
          "Block-level storage",
          "Shared file systems",
          "Hosting active databases"
        ],
        "correct": 0
      },
      {
        "question": "A ___ organizes the Amazon Simple Storage Service (Amazon S3) namespace at the highest level.",
        "answers": [
          "Group",
          "Container",
          "Region",
          "Bucket"
        ],
        "correct": 3
      },
      {
        "question": "A developer wants to store image files in a bucket that is called images-bucket, but receives the error BucketAlreadyExists. Which action must the developer take to resolve this error?",
        "answers": [
          "Bucket names are globally unique. If the requested bucket name is not available, the developer must rename the bucket.",
          "Bucket names go to the highest bidder. The developer must outbid the current bucket owner.",
          "Bucket names are unique to the Region that they are created in. If the requested bucket name is not available, the developer must create the images-bucket in a different Region.",
          "The developer must contact AWS Support to request approval to use the same bucket name."
        ],
        "correct": 0
      },
      {
        "question": "A developer is using Amazon Simple Storage Service (Amazon S3) to host a static website in a bucket that is called frank-martha-cafe. This bucket is in the us-east-1 Region. Which URL is the virtual-hosted-style URL for the website?",
        "answers": [
          "https://frank-martha-cafe.s3-website-us-east-1.amazonaws.com",
          "https://s3-website-us-east-1.amazonaws.com/frank-martha-cafe",
          "https://www.frank-martha-cafe.s3-website-us-east-1.amazonaws.com",
          "https://frank-martha-cafe.s3-us-east-1.amazonaws.com"
        ],
        "correct": 0
      },
      {
        "question": "After versioning is enabled on an Amazon Simple Storage Service (Amazon S3) bucket, it can be disabled.",
        "answers": [
          "True",
          "False"
        ],
        "correct": 1
      },
      {
        "question": "A developer uses an Amazon Simple Storage Service (Amazon S3) bucket. They want to allow a certain AWS Identity and Access Management (IAM) user to perform any S3 operations on the bucket and its objects. They also want to follow AWS recommendations for granting permissions. Which mechanism should the developer apply to the bucket?",
        "answers": [
          "Bucket policy",
          "Cross-Origin Resource Sharing (CORS)",
          "IAM policy",
          "Bucket access control list (ACL)"
        ],
        "correct": 0
      },
      {
        "question": "A developer wants to allow a user to download private objects directly from an Amazon Simple Storage Service (Amazon S3) bucket without needing AWS security credentials or permissions. What can the developer share with the user to grant them time-limited access to the objects?",
        "answers": [
          "A presigned URL",
          "The bucket endpoint URL",
          "A temporary token",
          "Their AWS account root user credentials"
        ],
        "correct": 0
      },
      {
        "question": "Which method can be used to encrypt Amazon Simple Storage Service (Amazon S3) objects in transit?",
        "answers": [
          "Server-Side Encryption with Amazon S3-Managed Keys (SSE-S3)",
          "Server-Side Encryption with AWS KMS-Managed Keys (SSE-KMS)",
          "Server-Side Encryption with Customer-Provided Keys (SSE-C)",
          "Secure Sockets Layer/Transport Layer Security (SSL/TLS)"
        ],
        "correct": 3
      },
      {
        "question": "A developer hosts a static website in an Amazon Simple Storage Service (Amazon S3) bucket. The website references image objects in another S3 bucket. However, these images do not display on the website. What could be the problem?",
        "answers": [
          "Cross-Origin Resource Sharing (CORS) has not been enabled on the bucket where the assets are stored.",
          "The security group of the S3 bucket does not include an inbound rule to allow HTTP traffic on port 80.",
          "Amazon S3 does not support object sharing between buckets.",
          "Cross-Region Replication (CRR) has not been enabled on the bucket where the assets are stored."
        ],
        "correct": 0
      },
      {
        "question": "What is the largest size of an object that a user can upload to Amazon Simple Storage Service (Amazon S3) in a single PUT operation?",
        "answers": [
          "1 GB",
          "100 MB",
          "5 GB",
          "5 TB"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": 13,
    "title": "AWS Module 4 - IAM and Security",
    "questions": [
      {
        "question": "Which AWS Identity and Access Management (IAM) resource explicitly grants or denies permissions to a user or group of users?",
        "answers": [
          "IAM roles",
          "IAM users",
          "IAM groups",
          "IAM policies"
        ],
        "correct": 3
      },
      {
        "question": "Which statements about IAM user authentication are true? (Select TWO.)",
        "answers": [
          "AWS credentials to authenticate with any supported services must be provided.",
          "A user name and password to authenticate to the console must be provided.",
          "A .pem or .ppk file is used to authenticate programmatically to the AWS application programming interface (API).",
          "It is a best practice to use the account root user credentials to authenticate programmatically by using the AWS Command Line Interface (AWS CLI).",
          "Each AWS account can have only one administrator who manages other IAM users."
        ],
        "correct": [1, 2]
      },
      {
        "question": "Which suggestion is an Amazon Web Services (AWS) recommendation for securing AWS credentials for applications that run on Amazon Elastic Compute Cloud (Amazon EC2) instances?",
        "answers": [
          "Embed AWS credentials in the software development kit (SDK) client code.",
          "Store credentials in local AWS configuration files.",
          "Create an AWS Identity and Access Management (IAM) role and attach it to the EC2 instance.",
          "Create an AWS Identity and Access Management (IAM) user and attach it to the EC2 instance."
        ],
        "correct": 2
      },
      {
        "question": "What is the format of AWS Identity and Access Management (IAM) policies that define the allowable API calls an entity can invoke?",
        "answers": [
          "YAML Aint Markup Language (YAML)",
          "Security Assertion Markup Language (SAML)",
          "Comma-separated values (CSV)",
          "JavaScript Object Notation (JSON)"
        ],
        "correct": 3
      },
      {
        "question": "An administrator created an AWS Identity and Access Management (IAM) group called managers within an AWS account. A ___ policy is attached to the managers group. It allows managers to read from and write to an Amazon Simple Storage Service (Amazon S3) bucket in the same AWS account. What is this type of policy?",
        "answers": [
          "Identity-based",
          "Resource-based",
          "Cross-account access",
          "AdministratorAccess managed"
        ],
        "correct": 0
      },
      {
        "question": "Which statement reflects best practices when granting permissions to users, groups, roles, and resources?",
        "answers": [
          "Create policies that allow broad access and then limit permissions as needed, based on usage.",
          "Use the account root user for routine tasks that the administrator performs.",
          "Create policies that follow the principle of least privilege.",
          "Do not set policies for individual resources."
        ],
        "correct": 2
      },
      {
        "question": "What is the effect of the following policy statement?\n\nEffect: \"Deny\", \"Action\": [ \"dynamodb:*\", \"s3:*\" ]\nNotResource\": [ \"arn:aws:dynamodb:region:account-number:table/pollynotes\", \"arn:aws:s3:::polly-notes-web\", \"arn:aws:s3:::polly-notes-mp3/*\" ]",
        "answers": [
          "Denies actions on DynamoDB or Amazon S3 resources except for the resources that are listed in the NotResource element",
          "Denies the ability to write to the pollynotes DynamoDB table",
          "Denies the ability to read from the polly-notes-web S3 bucket",
          "Denies actions on the DynamoDB table or S3 buckets that are listed in the NotResources element"
        ],
        "correct": 0
      },
      {
        "question": "Which statements are true about evaluation logic for AWS Identity and Access Management (IAM) policies? (Select TWO.)",
        "answers": [
          "You cannot have deny and allow statements in the same policy.",
          "An explicit allow overrides an explicit deny.",
          "An explicit deny overrides an explicit allow.",
          "By default, all requests are denied.",
          "By default, all requests are allowed."
        ],
        "correct": [2, 3]
      },
      {
        "question": "Which option is the Amazon Web Services (AWS) customer responsible for under the AWS shared responsibility model? (Select TWO.)",
        "answers": [
          "Security group configuration",
          "Physical servers",
          "Client-side data",
          "Edge location infrastructure",
          "Availability Zone security"
        ],
        "correct": [0, 2]
      },
      {
        "question": "What is the correct term for the process of verifying a user's identity as a developer?",
        "answers": [
          "Endorsement",
          "Authentication",
          "Confirmation",
          "Authorization"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": 14,
    "title": "AWS Module 5 - Amazon DynamoDB",
    "questions": [
      {
        "question": "Which component is part of an Amazon DynamoDB table?",
        "answers": [
          "Predefined schema",
          "SQL-based queries",
          "Attributes",
          "Columns"
        ],
        "correct": 2
      },
      {
        "question": "An Amazon DynamoDB table called SensorReadings captures sensor readings. These readings include a sensor ID attribute that acts as the partition key, and a timestamp attribute that is the sort key. Which statement is true?",
        "answers": [
          "The sensor ID together with the timestamp represent a simple primary key.",
          "It is impossible for two items in the SensorReadings table to have the same partition key.",
          "It is impossible for two items in the SensorReadings table to have the same sort key.",
          "It is impossible for two items in the SensorReadings table to have the same primary key."
        ],
        "correct": 3
      },
      {
        "question": "Which statement about Amazon DynamoDB partitions is true?",
        "answers": [
          "DynamoDB stores data in partitions and chooses the partition based on the range attribute.",
          "If a table has a simple primary key (partition key only), DynamoDB stores and retrieves each item based on its hash attribute.",
          "If a table has a composite primary key, DynamoDB will sort the items based on the sort key before selecting the partition for the item.",
          "A developer writes a hash function to tell DynamoDB how to partition the items."
        ],
        "correct": 1
      },
      {
        "question": "Suppose that a developer has a restaurants database table that can be queried by name (the partition key), or by name and location (the sort key). What should the developer do if they also want to query by type of cuisine and average customer rating?",
        "answers": [
          "Set up a local secondary index on cuisine and customer rating.",
          "Set up a global secondary index on cuisine and customer rating.",
          "Change the primary key on the restaurant table to be a complex primary key based on cuisine and customer rating.",
          "Perform a query that uses the cuisine and average customer rating attributes."
        ],
        "correct": 1
      },
      {
        "question": "A video game developer who uses Amazon DynamoDB wants to ensure that players' profiles are updated correctly when they make in-game purchases. This process requires multiple updates as part of a single user action. What is the best choice to write this developer's application to manage these complex, all-or-nothing changes?",
        "answers": [
          "Add an Amazon DynamoDB Accelerator (DAX) cluster.",
          "Implement global tables.",
          "Create application code to check that all parts of the transaction were written successfully, and then roll back the update if any part failed.",
          "Use DynamoDB transactions."
        ],
        "correct": 3
      },
      {
        "question": "Which scenarios are example use cases for Amazon DynamoDB Streams? (Select TWO.)",
        "answers": [
          "An application that requires the fastest possible response time for reads to support real-time bidding",
          "An application that requires repeated reads against a large set of regional weather data to perform a long-running analysis",
          "An application that automatically sends notifications to the mobile devices of all friends in a group when one friend uploads a new picture",
          "An application that must monitor changes to a DynamoDB table and take action on specific changes when a value reaches a certain threshold",
          "An application that requires an in-memory data store"
        ],
        "correct": [2, 3]
      },
      {
        "question": "Which statement about global tables is true?",
        "answers": [
          "Global tables provide a managed solution for replicating tables within a single AWS Region.",
          "Global tables use Amazon Simple Storage Service (Amazon S3) to propagate changes between replicas.",
          "When a global table is created, Amazon DynamoDB performs all necessary tasks to create identical tables and propagate ongoing data changes to specified Regions.",
          "With a global table, Amazon DynamoDB supports partial replication of some of the items in a table."
        ],
        "correct": 2
      },
      {
        "question": "How far back in days can an Amazon DynamoDB table be restored by using point-in-time recovery?",
        "answers": [
          "The last week",
          "The last 10 days",
          "The last 35 days",
          "The last calendar month"
        ],
        "correct": 2
      },
      {
        "question": "Which statement describes Amazon DynamoDB application programming interface (API) control operations that can be invoked by an application?",
        "answers": [
          "Create and manage DynamoDB tables.",
          "Create, read, update, and delete data in a table.",
          "Get and write batches of items in a DynamoDB table.",
          "Make coordinated, all-or-nothing changes to multiple items both within and across tables."
        ],
        "correct": 0
      },
      {
        "question": "Which statement best describes Amazon DynamoDB?",
        "answers": [
          "An in-memory data store that can boost the performance of databases",
          "A graph database engine that is optimized for storing billions of relationships",
          "A relational database that is built for the cloud and is compatible with MySQL and PostgreSQL",
          "A key-value and document database that scales horizontally and works well for internet-scale applications"
        ],
        "correct": 3
      }
    ]
  },
  {
    "id": 15,
    "title": "AWS Module 6 - API Gateway and REST APIs",
    "questions": [
      {
        "question": "Which phrase best describes a RESTful API?",
        "answers": [
          "An API that uses HTTP to communicate between client and server",
          "A proxy that exists between client and server to handle common problems that occur with API-driven applications",
          "An API that follows the principles of the Representational State Transfer style",
          "An API that resides on the web server"
        ],
        "correct": 2
      },
      {
        "question": "Which option suggests the use of WebSocket APIs?",
        "answers": [
          "An order processing application returns an order number to each customer when they submit an order.",
          "A batch process bundles orders and sends them to a fulfillment center application.",
          "A real-time chat application lets customers talk to customer support about their orders.",
          "A reporting application gives the sales team access to static daily reports from their phones."
        ],
        "correct": 2
      },
      {
        "question": "Which use case suggests using Amazon API Gateway HTTP APIs?",
        "answers": [
          "An application needs an API proxy in front of an AWS Lambda function.",
          "An application must transform a response from an AWS Lambda function before returning the response to the client.",
          "A developer wants to use mock endpoints to test their API.",
          "A developer wants to assign different API quotas by client."
        ],
        "correct": 0
      },
      {
        "question": "Which statement about Amazon API Gateway integrations is true?",
        "answers": [
          "A first-class integration connects an API Gateway HTTP API route to an external third-party service API.",
          "A developer can use HTTP proxy integrations to direct a route to a resource on the internet.",
          "API Gateway cannot access resources within a virtual private cloud (VPC).",
          "An API integration request encapsulates an HTTP request that the backend receives and is always different from the method request that the client submits."
        ],
        "correct": 1
      },
      {
        "question": "An application that uses Amazon API Gateway must capture contact information from a third-party client application. The client application sends given name, surname, business phone, and cell phone. The backend application database has only two fields: name and mobile phone. Which option requires the fewest application changes?",
        "answers": [
          "Export the API definition and use it to update the client.",
          "Use a mapping template to transform the request before it is sent to the database.",
          "Create a usage plan that describes the fields and applies only to this client.",
          "Use a first-class integration to connect the client to the database."
        ],
        "correct": 1
      },
      {
        "question": "Which elements are part of the base URI that AWS generates for an Amazon API Gateway API?",
        "answers": [
          "Region and stage name",
          "API identifier and version",
          "Account ID and stage name",
          "Region and version"
        ],
        "correct": 0
      },
      {
        "question": "Given this snippet:\naws apigatewayv2 create-route \\\n--api-id 032501670a \\\n--target arn:aws:lambda:us-east-2:AcctID:function:readFn\n\nWhich option could replace the <?> to create an API route that returns an individual product value from an online catalog?",
        "answers": [
          "route-key 'GET /products/{product_id}' \\",
          "route-key 'PUT /products' \\",
          "route-selection-expression '$GET/product' \\",
          "route-selection-expression 'PUT /products/{proxy+}' \\"
        ],
        "correct": 0
      },
      {
        "question": "Which statement about Amazon API Gateway stages is true?",
        "answers": [
          "Stage names are sequentially assigned based on the API version.",
          "Any stage on any API type can be set to autodeploy.",
          "Developers can use stage variables to connect different stages to different backends.",
          "Developers should avoid creating different stages for each development environment."
        ],
        "correct": 2
      },
      {
        "question": "A security team wants to know how to protect APIs in their internet application from common web exploits, like SQL injection or cross-site scripting. Which solution most directly addresses their specific concern?",
        "answers": [
          "Set throttling limits on their API methods in Amazon API Gateway.",
          "Set all of their APIs to use private endpoints.",
          "Configure a JSON Web Token (JWT)-based authorizer for Amazon API Gateway.",
          "Use AWS WAF with Amazon API Gateway."
        ],
        "correct": 3
      },
      {
        "question": "What does the Amazon API Gateway integration Latency metric tell the user?",
        "answers": [
          "Frequency of server-side errors that affect latency",
          "Speed of the API response back to the client",
          "Responsiveness of the backend",
          "How often requests are throttled"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": 16,
    "title": "AWS Comprehensive Knowledge Check",
    "questions": [
      {
        "question": "If a DynamoDB table has a simple primary key, how does DynamoDB determine where to store each item?",
        "answers": [
          "Based on the Region selected by the user",
          "By sorting items alphabetically by key name",
          "Based on the hash value of the partition key",
          "Using a random partition assignment algorithm"
        ],
        "correct": 2
      },
      {
        "question": "When you use an AWS SDK to interact with AWS, which communication protocol is used under the hood?",
        "answers": [
          "HTTP/HTTPS",
          "TCP/IP",
          "WebSocket",
          "SSH"
        ],
        "correct": 0
      },
      {
        "question": "Why can DynamoDB act as both a key-value store and a document store?",
        "answers": [
          "Because each record must conform to a fixed schema",
          "Because it stores data in structured tables like SQL",
          "Because it automatically generates relational joins across tables",
          "Because each item can include complex, nested attributes beyond its key"
        ],
        "correct": 3
      },
      {
        "question": "Which of the following correctly describes how AWS access modes work?",
        "answers": [
          "Actions performed using the CLI or SDK can also be viewed in the AWS Management Console",
          "You must use the same access mode to create, view, and delete a resource",
          "You can only view resources created through the Console in the Console",
          "The AWS SDK cannot interact with EC2 instances"
        ],
        "correct": 0
      },
      {
        "question": "Why can't client applications directly invoke AWS Lambda functions via standard HTTP requests?",
        "answers": [
          "Lambda functions only support WebSocket communication",
          "HTTP requests must first pass through CloudWatch",
          "Lambda only accepts traffic through CloudFront",
          "Lambda functions do not have public URIs"
        ],
        "correct": 3
      },
      {
        "question": "Which statement is NOT true about the Query operation in DynamoDB?",
        "answers": [
          "It scans the entire table sequentially",
          "It can optionally use the sort key for filtering",
          "It can return items from multiple partitions",
          "It retrieves items by matching the partition key"
        ],
        "correct": 0
      },
      {
        "question": "Which statement correctly describes how data is accessed when using a resource API?",
        "answers": [
          "By using the AWS Management Console under the hood",
          "By calling AWS Lambda functions to retrieve resource metadata",
          "Through objects and collections that represent AWS resources",
          "By executing raw HTTP requests to AWS service endpoints"
        ],
        "correct": 2
      },
      {
        "question": "Which of the following statements about updating DynamoDB items is NOT correct?",
        "answers": [
          "You can include a condition expression in the update request",
          "You can use UpdateItem to add a new attribute",
          "You can't increase or decrease numeric values",
          "You can update only specific attributes of an item"
        ],
        "correct": 2
      },
      {
        "question": "Which of the following statements best defines REST?",
        "answers": [
          "A transport layer for secure web communication",
          "A communication protocol for sending JSON data over HTTP",
          "An architectural style that defines principles for structuring client-server communication",
          "A data serialization standard used by web services"
        ],
        "correct": 2
      },
      {
        "question": "A developer creates and tags EC2 instances using the AWS CLI. Another developer writes a Java SDK program to list and describe instances. However, the Java SDK program doesn't return any results. What's the most likely cause?",
        "answers": [
          "SDK applications cannot read tags created via CLI",
          "The SDK is connected to a different AWS Region",
          "The Java SDK requires IAM permissions distinct from the CLI",
          "Instances launched from the CLI aren't visible to the SDK"
        ],
        "correct": 1
      },
      {
        "question": "A developer wants to set up an API endpoint /getWeather that directly retrieves data from an external weather service using its public REST API. Which API Gateway integration type fits best?",
        "answers": [
          "HTTP Integration that forwards requests to the external endpoint",
          "AWS Service Integration because it supports public APIs",
          "Lambda Integration since external APIs require code execution",
          "Mock Integration for static test data"
        ],
        "correct": 0
      },
      {
        "question": "If a bucket policy contains an explicit Deny statement and a matching Allow statement for the same resource, what happens?",
        "answers": [
          "Access is granted only if MFA is enabled",
          "The Deny statement overrides the Allow",
          "The Allow statement takes priority",
          "Both statements cancel each other out"
        ],
        "correct": 1
      },
      {
        "question": "You created a DynamoDB table named Employees with EmployeeID as the partition key. Later, you realize that multiple employees can share the same EmployeeID across different departments, so you want to make Department part of the key as well. What should you do?",
        "answers": [
          "Create a Local Secondary Index on Department and make it the new partition key",
          "Delete the table and create a new one with EmployeeID as partition key and Department as sort key, then migrate your data",
          "Change the key schema directly from the DynamoDB console",
          "Modify the table to add Department as a sort key using the UpdateTable operation"
        ],
        "correct": 1
      },
      {
        "question": "You need to create a new Amazon S3 bucket named my-lab-bucket in the us-east-1 Region by using the AWS CLI. Which of the following commands is correct?",
        "answers": [
          "aws s3api create-bucket --bucket my-lab-bucket --create-bucket-configuration",
          "aws s3api create-bucket --bucket empty --name my-lab-bucket",
          "aws s3api create-bucket --bucket my-lab-bucket --region us-east-1",
          "aws s3 mb s3://my-lab-bucket --region us-west-2"
        ],
        "correct": 2
      },
      {
        "question": "Sofía created a DynamoDB table named FoodProducts with product_id as the primary key. Later, she wants to search for items based on the category attribute, which isn't part of the primary key. What should Sofía do to enable this efficiently?",
        "answers": [
          "Create a Local Secondary Index (LSI) on the category attribute",
          "Use a Scan operation and apply a filter on the category attribute",
          "Modify the table's primary key to include category as a sort key",
          "Add a Global Secondary Index (GSI) with category as the partition key"
        ],
        "correct": 3
      },
      {
        "question": "You apply an IP-based restriction to your bucket policy and verify that the site loads fine on your local browser. Next, you run a curl command to the same S3 website endpoint from your VS Code IDE, but you get an AccessDenied error. Which of the following most accurately explains this?",
        "answers": [
          "The bucket policy must also include a GetBucketWebsite permission for SDK-based calls.",
          "S3 policies deny command-line requests that aren't signed with AWS credentials.",
          "The IDE connects through a public network with a different IP, so the request fails the policy condition.",
          "The curl command needs an explicit --public-access flag for S3 website endpoints."
        ],
        "correct": 2
      },
      {
        "question": "You create a file named notes.txt inside your CloudShell home directory to store AWS commands. The next day, you log in again and expect to see it. What happens?",
        "answers": [
          "The file exists, but must be restored manually from the S3 bucket",
          "The file persists because CloudShell stores files in your home directory",
          "The file syncs automatically to Amazon S3",
          "The file is deleted at session end",
          "The file is saved only if you exported it manually"
        ],
        "correct": 1
      },
      {
        "question": "The [GET] /products endpoint is designed to eventually perform a DynamoDB table scan. What does this endpoint simulate when you configure it as a mock integration?",
        "answers": [
          "Returning a filtered dataset based on query parameters",
          "Returning all items from a DynamoDB table",
          "Returning results from an S3 bucket",
          "Returning a response based on the filter and query parameters",
          "Returning a hard-coded response without connecting to any backend"
        ],
        "correct": 4
      },
      {
        "question": "You're setting up a mock API in Amazon API Gateway with the resource /products. The goal is to simulate a successful response before connecting it to DynamoDB. Which integration type should you select?",
        "answers": [
          "AWS Service Integration",
          "HTTP Integration",
          "Mock Integration",
          "Lambda Proxy Integration"
        ],
        "correct": 2
      },
      {
        "question": "What is Amazon Q Developer?",
        "answers": [
          "A cloud-based integrated development environment (IDE)",
          "A wizard that leads you through the steps to configure your integrated development environment (IDE)",
          "A browser-based CLI",
          "A generative AI-powered coding assistant"
        ],
        "correct": 3
      },
      {
        "question": "Which tool enables users to control their AWS services from the command line and automate service management with scripts?",
        "answers": [
          "Amazon Q Developer",
          "AWS X-Ray",
          "AWS Tools for PowerShell",
          "AWS Identity and Access Management (IAM)"
        ],
        "correct": 2
      },
      {
        "question": "What is the format of AWS Identity and Access Management (IAM) policies that define the allowable API calls an entity can invoke?",
        "answers": [
          "Security Assertion Markup Language (SAML)",
          "YAML Ain't Markup Language (YAML)",
          "JavaScript Object Notation (JSON)",
          "Comma-separated values (CSV)"
        ],
        "correct": 2
      },
      {
        "question": "Which statement about global tables is true?",
        "answers": [
          "Global tables use Amazon Simple Storage Service (Amazon S3) to propagate changes between replicas.",
          "When a global table is created, Amazon DynamoDB performs all necessary tasks to create identical tables and propagate ongoing data changes to specified Regions.",
          "With a global table, Amazon DynamoDB supports partial replication of some of the items in a table.",
          "Global tables provide a managed solution for replicating tables within a single AWS Region."
        ],
        "correct": 1
      },
      {
        "question": "A developer hosts a static website in an Amazon Simple Storage Service (Amazon S3) bucket. The website references image objects in another S3 bucket. However, these images do not display on the website. What could be the problem?",
        "answers": [
          "Cross-Origin Resource Sharing (CORS) has not been enabled on the bucket where the assets are stored.",
          "The security group of the S3 bucket does not include an inbound rule to allow HTTP traffic on port 80.",
          "Cross-Region Replication (CRR) has not been enabled on the bucket where the assets are stored.",
          "Amazon S3 does not support object sharing between buckets."
        ],
        "correct": 0
      },
      {
        "question": "A developer wants to allow a user to download private objects directly from an Amazon Simple Storage Service (Amazon S3) bucket without needing AWS security credentials or permissions. What can the developer share with the user to grant them time-limited access to the objects?",
        "answers": [
          "Their AWS account root user credentials",
          "A presigned URL",
          "A temporary token",
          "The bucket endpoint URL"
        ],
        "correct": 1
      },
      {
        "question": "Which statement about Amazon DynamoDB partitions is true?",
        "answers": [
          "If a table has a composite primary key, DynamoDB will sort the items based on the sort key before selecting the partition for the item.",
          "If a table has a simple primary key (partition key only), DynamoDB stores and retrieves each item based on its hash attribute.",
          "A developer writes a hash function to tell DynamoDB how to partition the items.",
          "DynamoDB stores data in partitions and chooses the partition based on the range attribute."
        ],
        "correct": 1
      },
      {
        "question": "A ___ organizes the Amazon Simple Storage Service (Amazon S3) namespace at the highest level.",
        "answers": [
          "Group",
          "Region",
          "Bucket",
          "Container"
        ],
        "correct": 2
      },
      {
        "question": "A student is learning about Amazon Simple Storage Service (Amazon S3). During an interview, a potential employer asks the student to explain how Amazon S3 can be used as a storage solution. Which option is a use case for Amazon S3?",
        "answers": [
          "Hosting active databases",
          "Shared file systems",
          "Data lake",
          "Block-level storage"
        ],
        "correct": 2
      },
      {
        "question": "Which statement about Amazon API Gateway integrations is true?",
        "answers": [
          "A developer can use HTTP proxy integrations to direct a route to a resource on the internet.",
          "A first-class integration connects an API Gateway HTTP API route to an external third-party service API.",
          "An API integration request encapsulates an HTTP request that the backend receives and is always different from the method request that the client submits.",
          "API Gateway cannot access resources within a virtual private cloud (VPC)."
        ],
        "correct": 0
      },
      {
        "question": "Which statements describe AWS resource application programming interfaces (APIs)? (Select TWO.)",
        "answers": [
          "They have at least one class per conceptual resource.",
          "They provide access to resources through objects and collections.",
          "They have objects for request and result data.",
          "They provide a lower-level abstraction than the higher-level calls made by service client APIs.",
          "They provide a higher-level abstraction than the low-level calls made by service client APIs."
        ],
        "correct": [1, 4]
      }
    ]
  }


];




let currentTest = null;
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = {};

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    renderTestsGrid();
    
    document.getElementById('backBtn').addEventListener('click', () => {
        showTestsGrid();
    });
    
    document.getElementById('restartBtn').addEventListener('click', () => {
        startTest(currentTest.id);
    });
});

// Отображение сетки тестов
function renderTestsGrid() {
    const grid = document.getElementById('testsGrid');
    grid.innerHTML = '';
    
    testsData.forEach(test => {
        const card = document.createElement('div');
        card.className = 'test-card';
        card.innerHTML = `
            <h3>${test.title}</h3>
            <p>${test.questions.length} вопросов</p>
        `;
        card.addEventListener('click', () => {
            if (test.questions.length > 0) {
                startTest(test.id);
            } else {
                alert('Этот тест пока пуст. Добавьте вопросы в файл script.js');
            }
        });
        grid.appendChild(card);
    });
}

// Начало теста
function startTest(testId) {
    currentTest = testsData.find(t => t.id === testId);
    if (!currentTest || currentTest.questions.length === 0) {
        alert('Тест пуст. Добавьте вопросы в файл script.js');
        return;
    }
    
    // Рандомизация вопросов
    shuffledQuestions = shuffleArray([...currentTest.questions]);
    
    // Рандомизация вариантов ответов для каждого вопроса
    shuffledQuestions = shuffledQuestions.map(q => {
    const answersWithIndices = q.answers.map((answer, index) => ({
        text: answer,
        originalIndex: index
    }));

    const shuffledAnswers = shuffleArray([...answersWithIndices]);

    let newCorrect;

    if (Array.isArray(q.correct)) {
        // несколько правильных
        newCorrect = q.correct.map(c =>
            shuffledAnswers.findIndex(item => item.originalIndex === c)
        );
    } else {
        // один правильный
        newCorrect = shuffledAnswers.findIndex(
            item => item.originalIndex === q.correct
        );
    }

    return {
        question: q.question,
        answers: shuffledAnswers.map(x => x.text),
        correct: newCorrect
    };
});

    
    currentQuestionIndex = 0;
    userAnswers = {};
    
    document.getElementById('testsSection').style.display = 'none';
    document.getElementById('testContainer').style.display = 'block';
    document.getElementById('testResults').style.display = 'none';
    document.getElementById('questionContainer').style.display = 'block';
    
    showQuestion();
}

// Показ вопроса
function showQuestion() {
    if (currentQuestionIndex >= shuffledQuestions.length) {
        showResults();
        return;
    }

    const q = shuffledQuestions[currentQuestionIndex];
    const isMultiple = Array.isArray(q.correct);

    const container = document.getElementById('questionContainer');
    container.innerHTML = `
        <div class="question-block" id="questionBlock">
            <div class="question-text">${currentQuestionIndex + 1}. ${q.question}</div>
            <ul class="answers-list">
                ${q.answers.map((answer, index) => `
                    <li class="answer-item">
                        <label class="answer-label" data-index="${index}">
                            <input 
                                type="${isMultiple ? 'checkbox' : 'radio'}"
                                name="answer-${currentQuestionIndex}"
                                value="${index}"
                            >
                            <span>${answer}</span>
                        </label>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;

    updateProgress();

    const inputs = container.querySelectorAll('input');

    if (!isMultiple) {
        // если одиночный выбор
        inputs.forEach(inp => {
            inp.addEventListener('change', () => {
                handleAnswer([Number(inp.value)], q);
            });
        });
    } else {
        // если несколько ответов
        inputs.forEach(inp => {
            inp.addEventListener('change', () => {
                const selected = [...inputs]
                    .map((i, idx) => i.checked ? idx : null)
                    .filter(i => i !== null);

                // проверяем, выбрал ли пользователь полный набор
                if (selected.length === q.correct.length) {
                    handleAnswer(selected, q);
                }
            });
        });
    }
}


function isCorrectAnswer(question, selected) {
    const correct = Array.isArray(question.correct)
        ? question.correct
        : [question.correct];

    if (!Array.isArray(selected)) selected = [selected];

    if (correct.length !== selected.length) return false;

    return correct.every(c => selected.includes(c));
}



// Обработка ответа
function handleAnswer(selected, question) {
    const questionBlock = document.getElementById('questionBlock');
    const labels = questionBlock.querySelectorAll('.answer-label');
    const inputs = questionBlock.querySelectorAll('input');

    // блокируем дальнейший выбор
    inputs.forEach(i => i.disabled = true);

    userAnswers[currentQuestionIndex] = selected;

    const correct = Array.isArray(question.correct)
        ? question.correct
        : [question.correct];

    // подсветка правильных
    correct.forEach(i => labels[i].classList.add('correct'));

    if (!isCorrectAnswer(question, selected)) {
        // подсветка неправильных
        selected.forEach(i => {
            if (!correct.includes(i)) {
                labels[i].classList.add('incorrect');
            }
        });
        questionBlock.classList.add('incorrect');
    } else {
        questionBlock.classList.add('correct');
    }

    setTimeout(() => {
        currentQuestionIndex++;
        showQuestion();
    }, 1500);
}



// Обновление прогресса
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressText').textContent = 
        `Вопрос ${currentQuestionIndex + 1} из ${shuffledQuestions.length}`;
    document.getElementById('testTitle').textContent = currentTest.title;
}

// Показ результатов
function showResults() {
    const correctCount = shuffledQuestions.reduce((acc, q, i) => {
    return acc + (isCorrectAnswer(q, userAnswers[i]) ? 1 : 0);
}, 0);

    
    const total = shuffledQuestions.length;
    const percentage = Math.round((correctCount / total) * 100);
    
    document.getElementById('questionContainer').style.display = 'none';
    document.getElementById('testResults').style.display = 'block';
    document.getElementById('score').textContent = 
        `${correctCount} из ${total} (${percentage}%)`;
}

// Возврат к сетке тестов
function showTestsGrid() {
    document.getElementById('testsSection').style.display = 'block';
    document.getElementById('testContainer').style.display = 'none';
}

// Функция для перемешивания массива (алгоритм Фишера-Йетса)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
