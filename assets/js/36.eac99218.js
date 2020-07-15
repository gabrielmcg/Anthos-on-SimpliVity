(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{434:function(e,t,s){"use strict";s.r(t);var r=s(35),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"deploying-admin-and-user-clusters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deploying-admin-and-user-clusters"}},[e._v("#")]),e._v(" Deploying admin and user clusters")]),e._v(" "),s("p",[e._v("The playbook "),s("code",[e._v("playbooks/create_cluster.yml")]),e._v(" will create admin and/or user clusters as specified in your configuration file.")]),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v(" If you have already have a working admin cluster and want to add a user cluster, then set "),s("code",[e._v("'create_admin_cluster: false'")]),e._v(" before running playbook "),s("code",[e._v("playbooks/create_cluster.yml")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),s("ul",[s("li",[e._v("F5 deployed")]),e._v(" "),s("li",[e._v("Admin workstation deployed")]),e._v(" "),s("li",[e._v("Admin and/or user cluster configured as described in the section "),s("a",{attrs:{href:"../config-core/admin-user-clusters-config"}},[e._v("Configuring admin and user clusters")])])]),e._v(" "),s("h2",{attrs:{id:"command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command"}},[e._v("#")]),e._v(" Command")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cd ~/Anthos-on-SimpliVity\n\nansible-playbook playbooks/create_cluster.yml  --ask-vault-pass\n")])])]),s("h2",{attrs:{id:"monitoring-gke-cluster-creation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#monitoring-gke-cluster-creation"}},[e._v("#")]),e._v(" Monitoring GKE Cluster Creation")]),e._v(" "),s("p",[e._v("You can monitor the cluster creation logs using the script "),s("code",[e._v("cluster-watch.py")]),e._v(" in the "),s("code",[e._v("scripts")]),e._v(" directory. To execute the program:")]),e._v(" "),s("ul",[s("li",[e._v("Open a new terminal session on Ansible controller")]),e._v(" "),s("li",[e._v("Source the same python virtual environment as you did for Ansible")]),e._v(" "),s("li",[e._v("run "),s("code",[e._v("cluster-watch.py")])])]),e._v(" "),s("p",[e._v("The script uses the Linux "),s("code",[e._v("lnav")]),e._v(" program to tail the log files created during the GKE cluster creation.")]),e._v(" "),s("h2",{attrs:{id:"tasks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tasks"}},[e._v("#")]),e._v(" Tasks")]),e._v(" "),s("ul",[s("li",[e._v("Copy Anthos Secrets to <<gkeadm_basedir>>/<<secrets_directory>>")]),e._v(" "),s("li",[e._v("Run "),s("code",[e._v("gkectl prepare")]),e._v(" to initialize vSphere Environment for Anthos GKE on-prem - depends on flag "),s("code",[e._v("gkectl_run_prepare")])]),e._v(" "),s("li",[e._v("Run "),s("code",[e._v("gkectl check-config")]),e._v(" to check Anthos GKE on-prem Admin Cluster Configuration - depends on flag "),s("code",[e._v("enable_config_check")])]),e._v(" "),s("li",[e._v("Run "),s("code",[e._v("gkectl create cluster")]),e._v(" to create Anthos GKE on-prem Admin Cluster")]),e._v(" "),s("li",[e._v("Check Anthos GKE on-prem User Cluster Configuration")]),e._v(" "),s("li",[e._v("Create Anthos GKE on-prem User Cluster")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ls ~/anthos_secrets/\n\nadmin-ws-config-gke-adm-gmcg.yaml  logging-monitoring-key.json  vsphere_workstation.pub\naudit-logging-key.json             usage-metering-key.json      whitelisted-key.json\nconnect-agent-key.json             vcenter.pem\nconnect-register-key.json          vsphere_workstation\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ls cluster-configurations/\n\nadmin-ip.yaml  admin.yaml  gmcg-gke-usercluster-1-ip.yaml  gmcg-gke-usercluster-1.yaml\n")])])]),s("h2",{attrs:{id:"outputs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[e._v("#")]),e._v(" Outputs")]),e._v(" "),s("ul",[s("li",[e._v("<<gkeadm_basedir>>/cluster-configurations")]),e._v(" "),s("li",[e._v("<<gkeadm_basedir>>/kubeconfigs")])]),e._v(" "),s("h1",{attrs:{id:"post-deployment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#post-deployment"}},[e._v("#")]),e._v(" Post-deployment")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://cloud.google.com/anthos/gke/docs/on-prem/reference/cheatsheet",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cloud.google.com/anthos/gke/docs/on-prem/reference/cheatsheet"),s("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);