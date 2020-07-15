(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{438:function(t,e,a){"use strict";a.r(e);var r=a(35),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vmware-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vmware-configuration"}},[t._v("#")]),t._v(" VMware configuration")]),t._v(" "),a("p",[t._v("Sensitive values are stored and encrypted in the vault file "),a("code",[t._v("inventory/group_vars/all/vault.yml")]),t._v(" and then referenced from the variables file.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("File")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("vault_vcenter_username")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("inventory/group_vars/all/vault.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("A vCenter Server user account. It might include a domain, for example, "),a("code",[t._v("'Administrator")]),a("br"),a("code",[t._v("@vsphere.local'")]),t._v(". The user account should have the Administrator role or equivalent privileges.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("vault_vcenter_password")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("inventory/group_vars/all/vault.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The password for the "),a("code",[t._v("vault_vcenter_username")]),t._v(" user.")])])])]),t._v(" "),a("p",[t._v("All remaining variables related to VMware configuration are described in the table below.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("File")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("vcenter.address")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("inventory/group_vars/all/all.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("IP or hostname of the vCenter appliance. For example, "),a("code",[t._v("vcentergen10.am2.cloudra.local")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("vcenter.username")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("inventory/group_vars/all/all.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Uses the value of the "),a("code",[t._v("vault_vcenter_username")]),t._v(" variable from the vault")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("vcenter.password")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("inventory/group_vars/all/all.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Uses the value of the "),a("code",[t._v("vault_vcenter_password")]),t._v(" variable from the vault")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("vcenter.datacenter")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("inventory/group_vars/all/all.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Name of the datacenter where the environment will be provisioned. For example, "),a("code",[t._v("Datacenter")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("vcenter.datastore")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("inventory/group_vars/all/all.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The datastore for storing VMs. For example, "),a("code",[t._v("ds1")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("vcenter.cluster")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("inventory/group_vars/all/all.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Name of your SimpliVity Cluster as defined in vCenter.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("vcenter.network")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("inventory/group_vars/all/all.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The name of the vSphere network where you want to create your admin workstation.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("vcenter.resourcepool")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("inventory/group_vars/all/all.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("If you are using a non-default resource pool, provide the name of your vSphere resource pool. For example, "),a("code",[t._v("Anthos_1.4")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("vcenter.cacert")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("inventory/group_vars/all/all.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("When a client, like GKE on-prem, sends a request to your vCenter server, the server must prove its identity to the client by presenting a certificate or a certificate bundle. To verify the certificate or bundle, GKE on-prem must have the root certificate in the chain of trust."),a("br"),a("br"),t._v("This field contains the name of the file, for example "),a("code",[t._v("vcenter.pem")]),t._v("  and the file must be present in directory defined by "),a("code",[t._v("secrets_path")]),t._v(".")])])])]),t._v(" "),a("h2",{attrs:{id:"generating-the-vcenter-pem-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generating-the-vcenter-pem-file"}},[t._v("#")]),t._v(" Generating the "),a("code",[t._v("vcenter.pem")]),t._v(" file")]),t._v(" "),a("p",[t._v("Enter the following command to download the certificate and save it to a file named vcenter.pem.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("true | openssl s_client -connect [VCENTER_IP]:443 -showcerts 2>/dev/null | sed -ne '/-BEGIN/,/-END/p' > vcenter.pem\n")])])]),a("p",[t._v("where [VCENTER_IP] is the IP address of your vCenter Server.")]),t._v(" "),a("h2",{attrs:{id:"determine-vcenter-address"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#determine-vcenter-address"}},[t._v("#")]),t._v(" Determine "),a("code",[t._v("vcenter.address")])]),t._v(" "),a("p",[t._v("Before you fill in the "),a("code",[t._v("vcenter.address")]),t._v(" field, inspect the serving certificate of your vCenter server.\nOpen the "),a("code",[t._v("vcenter.pem")]),t._v(" certificate file to see the Subject Common Name and the Subject Alternative Name:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("openssl x509 -in vcenter.pem -text -noout\n")])])]),a("p",[t._v("The output shows the Subject Common Name (CN). This might be an IP address, or it might be a hostname. For example:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Subject: ... CN = 203.0.113.100\n\nSubject: ... CN = my-host.my-domain.example\n")])])]),a("p",[t._v("The output might also include one or more DNS names under Subject Alternative Name:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("X509v3 Subject Alternative Name:\n    DNS:vcenter.my-domain.example\n")])])]),a("p",[t._v("Choose the Subject Common Name or one of the DNS names under Subject Alternative Name to use as the value of "),a("code",[t._v("vcenter.address")]),t._v(" in your configuration file. For example:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('vcenter:\n  address: "203.0.113.1"\n  ...\n')])])]),a("p",[t._v("or alternatively:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('vcenter:\n  address: "my-host.my-domain.example"\n  ...\n')])])]),a("h2",{attrs:{id:"sample-vcenter-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sample-vcenter-structure"}},[t._v("#")]),t._v(" Sample "),a("code",[t._v("vcenter")]),t._v(" structure")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("vcenter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("address")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10.1.223.196'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{ vault_vcenter_username }}"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{ vault_vcenter_password }}"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("datacenter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Datacenter'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("datastore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ds1'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cluster")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"New_Cluster"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("network")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'VM Network 2'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("resourcepool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Anthos_1.4'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cacert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vcenter.pem'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Must be in directory defined by 'secrets_directory'")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);