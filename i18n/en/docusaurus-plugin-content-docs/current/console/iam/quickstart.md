---
title: Welcome Guide
---
import shivaTenant from './images/shiva_tenant.png'
import shivaOnboard_003 from './images/shiva_onboard_003.png'
import shivaOnboard_004 from './images/shiva_onboard_004.png'
import shivaOnboard_001 from './images/shiva_onboard_001.png'
import shivaOnboard_005 from './images/shiva_onboard_005.png'
import shivaProfil_006 from './images/shiva_profil_006.png'
import shivaProfil_007 from './images/shiva_profil_007.png'
import shivaIpAccessManagement_01 from './images/shiva_ip_access_management_01.png'
import shivaIpAccessManagement_02 from './images/shiva_ip_access_management_02.png'

## Tenant

### Tenant Creation

Creating a tenant involves submitting a service request that includes:

    Your Organization's Name
    The contact's name, email address, and phone number for finalizing the configuration
    The tenant's name
    The desired availability zone or, if not specified, the physical site preferred for the tenant

### Tenant Selection

The selection of a tenant is done from the main page of Shiva's console:

<img src={shivaTenant} />

*__Note:__ The resources of a tenant are exclusive to that tenant and cannot be mixed with other tenants.*

## Shiva Console Access Accounts

Shiva console access accounts are created by the master commander's account on invitation (regardless of the authentication reference).
The identification information is global to your [Organization](./concepts.md#organizations).

*__Note:__ Identity federation is managed at the organization level.*

### Creating a User Account in Your Organization

Creating a user account within your organization involves an invitation process. To invite a user into an [Organization](./concepts.md#organizations), navigate to the __'Administration'__ menu located on the left side of your screen, beneath the top bar. From there, select the __'Users'__ sub-menu.

Click on the __'New User'__ button from the Users page.

<img src={shivaOnboard_003} />

Next, input the user's email address.

<img src={shivaOnboard_004} />

The user will then receive a verification email.

<img src={shivaOnboard_001} />

Once verification is complete, the user can log into the console.


Note: The provided images (shivaOnboard_003, shivaOnboard_004, and shivaOnboard_001) are placeholders and should be replaced with actual image URLs corresponding to the described screens in a real documentation context.

### Assignment of User Permissions

User permission management is handled from the user profile page.

<img src={shivaOnboard_003} />

By default, a user has no permissions. Therefore, it's necessary for the administrator who invited them to grant the required permissions based on their role. This can be done by clicking on the "Actions" menu of the user and selecting "Modify".

The permission assignment menu then appears:

<img src={shivaOnboard_005} />

Permission configuration needs to be set for each [Tenant](./concepts.md#tenant) within an [Organization](./concepts.md#organizations).

The list of permissions and their definitions can be accessed [here](#permissions).

### Changing User Language

To change a user's language, navigate to their __'Profile'__ in the upper right corner of the screen, under __'User Settings'__.

<img src={shivaProfil_006} />

This configuration is applied on a per-tenant basis [Tenant](./concepts.md#tenant).

### Subscription to Themed Notifications

The subscription management allows users to receive e-mails pertaining to activated themes, which will be automatically sent out upon the occurrence of corresponding events.

It can be accessed within the user profile, under the "My Subscriptions" tab:

<img src={shivaProfil_007} />

For instance, in case of an incident, specific e-mail notifications for this theme will be generated.

The list of available themes is subject to change and will continuously evolve to better align with operational needs and changes.

### Permissions

This section outlines the access control mechanisms and permissions associated with various components of a cloud computing environment. Understanding these permissions is crucial for ensuring data security, system integrity, and compliance with organizational policies.

#### User Permissions

1. **User Roles**:
   - **Admin**: Full access to all resources and functionalities.
   - **Manager**: Limited administrative privileges, including managing user accounts and resource quotas.
   - **Developer**: Access to development tools and environments, but restricted from modifying production settings.
   - **Reader**: Read-only access to specific resources or data.

2. **Access Control Lists (ACLs)**:
   - Fine-grained control over who can perform actions on which resources.
   - Can be applied at the resource level (e.g., S3 bucket, EC2 instance).

#### Resource Permissions

1. **Identity and Access Management (IAM) Policies**:
   - Define permissions for users, groups, and roles within AWS Identity and Access Management.
   - Examples:
     ```json
     {
       "Version": "2012-10-17",
       "Statement": [
         {
           "Effect": "Allow",
           "Action": ["s3:GetBucketLocation"],
           "Resource": "*"
         },
         {
           "Effect": "Deny",
           "Action": ["s3:DeleteObject"],
           "Resource": "arn:aws:s3:::my-bucket/*"
         }
       ]
     }
     ```

2. **Network Access Control Lists (NACLs)**:
   - Control inbound and outbound traffic at the subnet level for VPCs.
   - Example configuration:
     ```plaintext
     Protocol  |  Source Port   | Destination Port | Source IP Range        | Destination IP Range
     TCP        |             22              | Any                     | 0.0.0.0/0
     UDP        | N/A            | Any                | 0.0.0.0/0
     ```

3. **Security Groups**:
   - Act as virtual firewalls for instances, controlling inbound and outbound traffic at the instance level.
   - Example configuration:
     ```plaintext
     SG-Rule:
       Protocol = TCP
       Port Range = 22
       Source = MySecurityGroup
     ```

#### Compliance and Auditing

1. **CloudTrail**:
   - Logs API calls made to AWS services, providing an audit trail for security analysis and compliance.

2. **CloudWatch**:
   - Monitors resource usage and performance metrics, alerting on unusual activity that could indicate a security breach or policy violation.

3. **Compliance Monitoring Tools**:
   - Utilize third-party tools to ensure adherence to industry standards (e.g., HIPAA, GDPR) by analyzing IAM configurations and access logs.

### Best Practices

1. **Principle of Least Privilege**: Grant only necessary permissions required for users/roles to perform their duties.
2. **Regular Reviews**: Periodically review and audit permissions to ensure they align with current job responsibilities and organizational policies.
3. **Segregation of Duties**: Distribute critical tasks among multiple users to prevent any single user from having complete control over a process.
4. **Multi-Factor Authentication (MFA)**: Enforce MFA for all administrative accounts to add an extra layer of security.
5. **Regular Training**: Educate staff on the importance of permissions and how to handle sensitive data securely.

By carefully managing permissions, organizations can maintain robust security postures, protect sensitive information, and ensure compliance with regulatory requirements in a cloud computing environment.

### What are the available user account permissions in the Shiva Console?

Here is the list of [available permissions](#permissions).

### How to Grant Permission?

You can find the procedure for granting permissions [here](#permissions)

### Why can't I add a permission?

To add a permission, you need to have the __'iam_write'__ permission as well as the specific permission you wish to grant.

### How to Add a User:

*Note: To add a user, you must have the 'iam_write' permission.*

### How to audit user access/permissions?

Go to the Users page and click on the "Export CSV" button:

### How to Delete a User

In the 'Administration' menu located on the top left toolbar, under the 'User' submenu, click on the 'Action' icon of the user in question and select 'Delete'.

*Note:*

- *To add a user, you must have the __iam_write__ permission.*
- *If it's a federated user, make sure they've been removed from their identity repository as well.*

It is possible to reset your password by clicking on "Forgot Password?" from the login page of the Shiva console.

### Why are some users grayed out?

Users marked in gray are those whose accounts have not been verified. Upon account creation, the user receives a verification email.

<img src={shivaOnboard_001} />

Once verification is complete, the user can log into the console. The account remains gray until verification is finalized.

### What is a Personal Access Token (PAT)?

Generating a Personal Access Token (PAT), also known as an API key, is a secure method to connect to Shiva's APIs without using a graphical interface.

### What is MFA and is it mandatory?

MFA (multi-factor authentication) refers to the process of verifying an individual's identity through two or more factors, known as **two-factor authentication**.

The user must provide two distinct forms of identification. For instance, in Shiva console, MFA is mandatory and requires entering a one-time password after initially entering the account's password.

### Access and Authentication Management

### Access Control to a Tenant: Allowed IP Addresses

Access to the cloud management console is strictly limited to pre-authorized IP addresses in accordance with SecNumCloud's qualification requirements. This restriction enhances security by permitting access only from specified IP ranges, thereby minimizing risks of unauthorized access and safeguarding the cloud infrastructure according to the highest security standards.

Users can now view the list of authorized public IP addresses on their tenant and add a new public IP address directly from the "Administration > Access" tab.

<img src={shivaIpAccessManagement_01} />

To perform these actions, the user must have the `console_public_access_read` permission to view allowed IPs and the `console_public_access_write` permission to add a new public IP address to the list.

Here's how to add a new IP:

<img src={shivaIpAccessManagement_02} />

Note: *The removal of an authorized IP requires a support request in the Cloud Temple console.*
