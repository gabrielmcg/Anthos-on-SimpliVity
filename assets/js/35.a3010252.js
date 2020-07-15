(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{432:function(t,a,e){"use strict";e.r(a);var s=e(35),i=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"deploying-the-admin-workstation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploying-the-admin-workstation"}},[t._v("#")]),t._v(" Deploying the admin workstation")]),t._v(" "),e("p",[t._v("The playbook "),e("code",[t._v("playbooks/deploy_admin_wrkst.yml")]),t._v(" will deploy the admin workstation.")]),t._v(" "),e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),e("ul",[e("li",[t._v("F5 deployed")]),t._v(" "),e("li",[t._v("Admin workstation configuration as described in the section "),e("a",{attrs:{href:"../config-core/admin-workstation-config"}},[t._v("Configuring the admin workstation")])])]),t._v(" "),e("h2",{attrs:{id:"command"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#command"}},[t._v("#")]),t._v(" Command")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("cd ~/Anthos-on-SimpliVity\n\nansible-playbook playbooks/deploy_admin_wrkst.yml  --ask-vault-pass\n")])])]),e("h2",{attrs:{id:"tasks-performed"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tasks-performed"}},[t._v("#")]),t._v(" Tasks performed")]),t._v(" "),e("p",[t._v("If admin workstation does not already exist:")]),t._v(" "),e("ul",[e("li",[t._v("Create input file for gkeadm for creating GKE Admin workstation\n"),e("code",[t._v("<<secrets_path>>/admin-ws-config-<<gke_admin_workstation.name>>.yaml")])]),t._v(" "),e("li",[t._v("If "),e("code",[t._v("gkeadm_ova_path")]),t._v(" is specified, use that OVA otherwise download OVA")]),t._v(" "),e("li",[t._v("Deploy admin workstation using "),e("code",[t._v("gkeadm")]),t._v(" and the generated config file and "),e("code",[t._v("ansible_ssh_private_key_file")])])])])}),[],!1,null,null,null);a.default=i.exports}}]);