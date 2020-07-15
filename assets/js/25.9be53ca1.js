(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{448:function(e,t,a){"use strict";a.r(t);var r=a(35),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"input-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-files"}},[e._v("#")]),e._v(" Input files")]),e._v(" "),a("p",[e._v("A number of files are required to be present on the Ansible controller\nbefore the playbooks can be used to deploy the solution.")]),e._v(" "),a("h2",{attrs:{id:"location-of-input-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location-of-input-files"}},[e._v("#")]),e._v(" Location of input files")]),e._v(" "),a("p",[e._v("The location of the secrets directory, where the input files are stored, is typically located at "),a("code",[e._v("/home/ubuntu/anthos_secrets")]),e._v(".")]),e._v(" "),a("p",[e._v("It is recommended that the default location is used but it can be configured using the following combination of variables:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[e._v("Variable")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("File")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("local_user_home")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("inventory/group_vars/all/all.yml")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Set to "),a("code",[e._v("$HOME")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("secrets_directory")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("inventory/group_vars/all/all.yml")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("The directory on the ansible controller. "),a("br"),a("br"),e._v("Defaults to "),a("code",[e._v("'anthos_secrets'")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("secrets_path")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("inventory/group_vars/all/all.yml")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Set to "),a("code",[e._v("<<local_user_home>>/<<secrets_directory>>")])])])])]),e._v(" "),a("p",[e._v("Using the default values, the secrets directory ("),a("code",[e._v("secrets_path")]),e._v(") will be "),a("code",[e._v("/home/ubuntu/anthos_secrets")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"required-input-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#required-input-files"}},[e._v("#")]),e._v(" Required input files")]),e._v(" "),a("p",[e._v("The following files must be present in the secrets directory:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("SSH keypair")]),e._v(" - deployed to GKE Admin Workstation\n"),a("ul",[a("li",[a("code",[e._v("vsphere_workstation")])]),e._v(" "),a("li",[a("code",[e._v("vsphere_workstation.pub")])])])]),e._v(" "),a("li",[a("strong",[e._v("Whitelisted key")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("whitelisted-key.json")])])])]),e._v(" "),a("li",[a("strong",[e._v("Other GCP service account keys")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("connect-register-key.json")])]),e._v(" "),a("li",[a("code",[e._v("connect-agent-key.json")])]),e._v(" "),a("li",[a("code",[e._v("audit-logging-key.json")])]),e._v(" "),a("li",[a("code",[e._v("logging-monitoring-key.json")])]),e._v(" "),a("li",[a("code",[e._v("usage-metering-key.json")]),e._v(" (optional - used for user cluster resource metering.)")])])]),e._v(" "),a("li",[a("strong",[e._v("Primary vCenter SSL certificate")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("vcenter.pem")])])])]),e._v(" "),a("li",[a("strong",[e._v("Alternative vCenter SSL certificate")]),e._v(" - if you are deploying the admin workstation on a separate vCenter\n"),a("ul",[a("li",[a("code",[e._v("gkeadm_alt_vcenter.pem")])])])]),e._v(" "),a("li",[a("strong",[e._v("Docker registry certificate (optional)")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("private_reg_cert")])])])])]),e._v(" "),a("h2",{attrs:{id:"ssh-keypair"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh-keypair"}},[e._v("#")]),e._v(" SSH keypair")]),e._v(" "),a("p",[e._v("The private key to connect to the admin workstation is currently a user created key and is not the autogenerated key in the Anthos 1.4 GKE install.\nUse the "),a("code",[e._v("ssh-keygen")]),e._v(" command on the Ansible controller to generate the SSH key pair. For example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('ssh-keygen -t rsa -f ~/anthos_secrets/vsphere_workstation -N ""\n\nGenerating public/private rsa key pair.\nYour identification has been saved in /root/anthos_secrets/vsphere_workstation.\nYour public key has been saved in /root/anthos_secrets/vsphere_workstation.pub.\n...\n')])])]),a("p",[e._v("Ensure the key has proper access:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("chmod 600 <<anthos_secrets>>/vsphere_workstation\n")])])]),a("h2",{attrs:{id:"vcenter-ssl-certificate-s"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vcenter-ssl-certificate-s"}},[e._v("#")]),e._v(" vCenter SSL certificate(s)")]),e._v(" "),a("p",[e._v("See the section "),a("a",{attrs:{href:"vmware-config#generating-the-vcenter-pem-file"}},[e._v("Generating the vcenter.pem file")]),e._v(" in the\npage for vCenter configuration for details on how to generate the vCenter SSL certificate file.")]),e._v(" "),a("p",[e._v("If you are deploying the admin workstation to a separate vCenter, you will need to generate a second "),a("code",[e._v(".pem")]),e._v(" file\nand save it to the secrets directory. The file name can be specified using the "),a("code",[e._v("gke_admin_workstation.alt_vcenter.cacert")]),e._v("\nfield.")]),e._v(" "),a("h2",{attrs:{id:"whitelisted-account-and-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#whitelisted-account-and-key"}},[e._v("#")]),e._v(" Whitelisted account and key")]),e._v(" "),a("p",[e._v("To install GKE on-prem, you must have an Anthos subscription and:")]),e._v(" "),a("ul",[a("li",[e._v("Create a Google Cloud project.")]),e._v(" "),a("li",[e._v("In your Google Cloud project, create a service account and arrange for your service account to be whitelisted.")])]),e._v(" "),a("p",[e._v("See the relevant Google documentation at "),a("a",{attrs:{href:"https://cloud.google.com/anthos/gke/docs/on-prem/how-to/gcp-project",target:"_blank",rel:"noopener noreferrer"}},[e._v("Configuring your Google Cloud project"),a("OutboundLink")],1),e._v(" on how to generate the whitelisted key.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[e._v("Variable")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("File")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("gke_whitelisted_key")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("inventory/group_vars/all/all.yml")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Defaults to "),a("code",[e._v("whitelisted-key.json")])])])])]),e._v(" "),a("h2",{attrs:{id:"other-service-accounts-and-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-service-accounts-and-keys"}},[e._v("#")]),e._v(" Other service accounts and keys")]),e._v(" "),a("p",[e._v("Other Google Cloud service accounts and keys are required when installing Anthos GKE on-prem.\nYou can create these keys manually using the Google documentation at\n"),a("a",{attrs:{href:"https://cloud.google.com/anthos/gke/docs/on-prem/how-to/service-accounts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Service accounts and keys"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Alternatively, you can run the optional Ansible playbook "),a("code",[e._v("playbooks/gcp_key_create.yml")]),e._v(" to create the\nkeys, as described in the section "),a("a",{attrs:{href:"../playbooks/playbooks-gcp-key-create"}},[e._v("Create GCP keys (optional)")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[e._v("#")]),e._v(" Docker")]),e._v(" "),a("p",[e._v("If you are using a private Docker registry (for example, in an Air Gap install), you must configure\nthe registry and store the appropriate cert in the secrets directory. For more information,\nsee the section on "),a("a",{attrs:{href:"docker-config"}},[e._v("Docker configuration")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"file-names"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file-names"}},[e._v("#")]),e._v(" File names")]),e._v(" "),a("p",[e._v("The following table gathers together the variables used to specify the names of these files:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[e._v("Variable")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("File")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("gke_admin_workstation")]),a("br"),a("code",[e._v(".ssh_private_key")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("inventory/group_vars/all/all.yml")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("The name of the generated SSH private key file."),a("br"),e._v(" Defaults to "),a("code",[e._v("vsphere_workstation")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("gke_whitelisted_key")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("inventory/group_vars/all/all.yml")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("The name of the file containing the whitelisted key."),a("br"),e._v("Defaults to "),a("code",[e._v("whitelisted-key.json")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("vcenter.cacert")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("inventory/group_vars/all/all.yml")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("The name of the file containing the primary vCenter ssl certificate."),a("br"),e._v("Defaults to "),a("code",[e._v("vcenter.pem")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("gke_admin_workstation")]),a("br"),a("code",[e._v(".alt_vcenter.cacert")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("inventory/group_vars/all/all.yml")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("The name of the second SSL certificate file, if you are using an alternative vCenter for the admin workstation."),a("br"),e._v("Defaults to "),a("code",[e._v("gkeadm_alt_vcenter.pem")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("private_reg_cert")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("inventory/group_vars/all/all.yml")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("The name of the certificat, if you are using a private Docker registry."),a("br"),e._v(" Defaults to "),a("code",[e._v("registry.crt")])])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);