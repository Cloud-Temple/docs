---
title: Configure Backups with Kasten on S3 SNC Cloud Temple
---

---

## Objectives

The main objective of this guide is to show you how to configure **S3 SNC (SecNumCloud)** storage in Kasten to perform and manage your backups on the Cloud Temple infrastructure. This guide covers the steps necessary to set up this integration in an OpenShift environment.

---

## Known Limitations

In the context of this configuration:

- **Access to the S3 Cloud Temple offer**: You must have the S3 offer provided by Cloud Temple (access key and secret key).  
  
---

## Benefits

- **Secure and certified**: Cloud Temple offers S3 storage compliant with **SecNumCloud** standards, certified and secure.  
- **Simplicity of integration with Kasten**: The intuitive interface of Kasten allows for quick and direct configuration.  
- **Adapted to modern environments**: This solution is designed to easily integrate with Kubernetes clusters running on OpenShift.  

---

## Software Versions

Ensure the following software and tool versions are installed to guarantee optimal compatibility:  
- **Kasten K10**: v5.5.10 or higher  
- **OpenShift CLI**: v4.15.6 or higher  
- **Kubernetes**: v1.24 or higher (via OpenShift)  

---

## Prerequisites

To follow this guide, ensure you have the following:

1. **Access to the Kasten interface**: You must be able to access the Kasten dashboard deployed in your OpenShift cluster.  
2. **S3 keys provided by Cloud Temple**:
   - Access Key
   - Secret Key  
3. **Preconfigured Bucket**: An S3 Cloud Temple Bucket, for example: `demobackup`.   
4. **Kubernetes Permissions**: You must have administrative permissions within the Kasten namespace (`kasten-io`) to perform configurations.  

---

## Demonstration Plan

### Overview of Steps

1. Prepare the Kasten and OpenShift environment.  
2. Configure an S3 profile in the Kasten interface.  
3. Create and validate backup tasks pointing to the configured S3 location.  

---

## Required Files

No specific file is required for this configuration, but you will need the following information from Cloud Temple:  
- **S3 Access Key**  
- **S3 Secret Key**  
- **S3 SNC Endpoint URL**: For example, `xxxxx.s3.fr1.cloud-temple.com`.  
- **Your Bucket Name**: Example, `demobackup`.

---

## Deployment Process

### 1. Access Kasten via OpenShift

Access the graphical interface of your OpenShift cluster:  

1. Log in to the OpenShift console and go to the namespace where Kasten is deployed (default: `kasten-io`).  
2. Go to the **Applications** tab and click the redirect link to the Kasten dashboard.  
3. Once in Kasten, ensure dependencies are functional (node connectivity, available resources).  

---

### 2. Create an S3 Profile in Kasten

1. Once on the Kasten dashboard, go to the **"Locations"** (Locations) section.  
2. Click the **"Add New Location"** (Add New Location) button.  
3. Choose the storage type **"S3 Compatible Storage"**.  
4. Fill in the following parameters:  

   - **Type**: S3 Compatible Storage  
   - **Region**: `FR1`  
   - **Bucket Name**: `demobackup`  
   - **Endpoint (URL)**: `xxxxx.s3.fr1.cloud-temple.com`  
   - **Access Key**: Enter the access key provided by Cloud Temple.  
   - **Secret Key**: Enter the associated secret key.  

5. Test connectivity via the interface to verify that the connection to the Bucket is successful.  
6. Save the configuration.  

---

### 3. Configure and Validate a Backup Task

1. In Kasten, create a policy (Policy) to manage your backups:  
   - Go to the **Policies** (Policies) section.  
   - Click **Create Policy** (Create Policy).  
   - Select **Backup** as the task type.  
   - Choose the namespaces or workloads to include in the backup (e.g., a critical application deployed in OpenShift).  

2. Under **Location** (Location), select the S3 location you configured earlier (`demobackup`).  

3. Schedule the backup frequency:  
   - Example: Daily backup at 11:00 PM.  

4. Save the policy, then run a manual test to verify the proper functioning of your backups.  

---

### 4. Check the Backup Status

1. Go to the **Activities** (Activities) section of Kasten.  
2. Check the completed backups and verify that the data has been successfully sent to your Cloud Temple S3 Bucket.  
3. Log in to the Cloud Temple S3 interface to verify the presence of backup files in the Bucket.  

---

## Validation Criteria

To confirm that the backup is correctly configured:

1. Connectivity tests with the S3 Bucket (endpoint, access key, secret key) are successful.  
2. Backups run without errors and appear in the **Activities** section of Kasten.  
3. Backup files appear in the S3 Bucket (check via the Cloud Temple interface).  
4. The backed-up workloads can be successfully restored via Kasten.  

---

## Conclusion

By following this guide, you have successfully configured an S3-compatible SecNumCloud backup location in Kasten with the Cloud Temple infrastructure. This workflow allows you to efficiently manage your backups while leveraging a certified and secure storage solution.  

To go further, you can:  
- Add additional workloads to back up.  
- Configure advanced retention policies in Kasten.  
- Automate restore tests to validate your data.  

You now have a robust and compliant solution to secure your critical data! 🚀