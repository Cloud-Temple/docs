---
title: Configure Backups with Kasten on S3 SNC Cloud Temple
---

---

## Objectives

The main objective of this guide is to show you how to configure an **S3 SNC (SecNumCloud)** storage in Kasten to perform and manage your backups on the Cloud Temple infrastructure. This guide covers the steps necessary to configure this integration in an OpenShift environment.

---

## Known Limitations

In the context of this configuration:

- **Access to Cloud Temple S3 offering**: You must have the S3 offer provided by Cloud Temple (access key and secret key).  
  
---

## Highlights

- **Secure and certified**: Cloud Temple offers S3 storage conforming to **SecNumCloud** standards, certified and secure.  
- **Ease of integration with Kasten**: The intuitive Kasten interface allows for quick and straightforward configuration.  
- **Adapted to modern environments**: This solution is designed to easily integrate with Kubernetes clusters running with OpenShift.  

---

## Software Versions

Ensure that the following versions of software and tools are installed for optimal compatibility:  
- **Kasten K10**: v5.5.10 or higher  
- **OpenShift CLI**: v4.15.6 or higher  
- **Kubernetes**: v1.24 or higher (via OpenShift)  

---

## Prerequisites

To follow this guide, ensure you have the following items:

1. **Access to the Kasten interface**: You must be able to access the Kasten dashboard deployed in your OpenShift cluster.  
2. **S3 keys provided by Cloud Temple**:
   - Access Key
   - Secret Key  
3. **Pre-configured Bucket**: A Bucket in S3 Cloud Temple, example: `demobackup`.   
4. **Kubernetes Permissions**: You must have administrative permissions within the Kasten namespace (`kasten-io`) to perform configurations.  

---

## Demonstration Plan

### Overview of Steps

1. Preparation of the Kasten and OpenShift environment.  
2. Configuration of an S3 profile in the Kasten interface.  
3. Creation and validation of backup tasks pointing to the configured S3 location.  

---

## Necessary Files

No specific file is necessary for this configuration, but you will need the following information provided by Cloud Temple:  
- **S3 Access Key**  
- **S3 Secret Key**  
- **SNC S3 Endpoint URL**: For example, `xxxxx.s3.fr1.cloud-temple.com`.  
- **Name of your Bucket**: Example, `demobackup`.

---

## Deployment Process

### 1. Access Kasten via OpenShift

Access the graphical interface of your OpenShift cluster:  

1. Log in to the OpenShift console and navigate to the namespace where Kasten is deployed (default `kasten-io`).  
2. Go to the **Applications** tab and click on the redirect link to the Kasten dashboard.  
3. Once in Kasten, ensure that dependencies are functional (connectivity to nodes, available resources).  

---

### 2. Create an S3 Profile in Kasten

1. Once on the Kasten dashboard, go to the **"Locations"** section.  
2. Click on the **"Add New Location"** button.  
3. Choose the storage type **"S3 Compatible Storage"**.  
4. Fill in the following parameters:  

   - **Type**: S3 Compatible Storage  
   - **Region**: `FR1`  
   - **Bucket Name**: `demobackup`  
   - **Endpoint (URL)**: `xxxxx.s3.fr1.cloud-temple.com`  
   - **Access Key**: Fill in the access key provided by Cloud Temple.  
   - **Secret Key**: Fill in the associated secret key.  

5. Test connectivity via the interface to verify the connection to the Bucket is successful.  
6. Save the configuration.  

---

### 3. Configure and Validate a Backup Task

1. In Kasten, create a policy to manage your backups:  
   - Go to the **Policies** section.  
   - Click on **Create Policy**.  
   - Select **Backup** as the task type.  
   - Choose the namespaces or workloads to include in the backup (for example, a critical application deployed in OpenShift).  

2. Under **Location**, select the S3 location you configured previously (`demobackup`).  

3. Schedule the backup frequency:  
   - Example: Daily backup at 11:00 PM.  

4. Save the policy, then run a manual test to verify that your backups are functioning correctly.  

---

### 4. Verify Backup Status

1. Go to the **Activities** section of Kasten.  
2. Check the completed backups and verify that the data has been sent to your Cloud Temple S3 Bucket.  
3. Log in to the Cloud Temple S3 interface to confirm the presence of backup files in the Bucket.  

---

## Validation Criteria

To confirm that the backup is properly configured:

1. Connectivity tests with the S3 Bucket (endpoint, access key, secret key) are successful.  
2. Backups run without error and appear in the **Activities** section of Kasten.  
3. Backup files appear in the S3 Bucket (verify via the Cloud Temple interface).  
4. The backed-up workloads can be successfully restored via Kasten.  

---

## Conclusion

By following this guide, you have successfully configured a SecNumCloud compatible S3 backup location in Kasten with the Cloud Temple infrastructure. This workflow allows you to efficiently manage your backups while leveraging certified and secure storage.  

To go further, you can:  
- Add additional workloads to be backed up.  
- Configure advanced retention policies in Kasten.  
- Automate restoration tests to validate your data.  

You now have a robust and compliant solution to secure your critical data! 🚀