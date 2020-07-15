(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{442:function(e,t,s){"use strict";s.r(t);var a=s(35),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"service-mesh-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#service-mesh-configuration"}},[e._v("#")]),e._v(" Service mesh configuration")]),e._v(" "),s("p",[e._v("Google Cloud’s fully managed service mesh lets you manage complex microservices architectures so that you can\nget all the benefits of microservices without the overheads. It allows you to configure, control, secure and\nmonitor your services in one place, taking a significant burden off your operations and development teams.\nMore information on Anthos Service Mesh is available at\n"),s("a",{attrs:{href:"https://cloud.google.com/anthos/service-mesh",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cloud.google.com/anthos/service-mesh"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"user-cluster-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#user-cluster-configuration"}},[e._v("#")]),e._v(" User cluster configuration")]),e._v(" "),s("p",[e._v("General cluster config is supplied in the fields of the "),s("code",[e._v("gke_cluster_config")]),e._v(" structure in the "),s("code",[e._v("all.yml")]),e._v(" file.")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[e._v("Field")]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}},[e._v("Description")]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}},[e._v("Value")])])]),e._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[e._v("anthos_service_mesh_enable")])]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("Set to "),s("code",[e._v("true")]),e._v(" if you wish to enable service mesh on the cluster.")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("Default is "),s("code",[e._v("false")])])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[e._v("anthos_service_mesh_externalIP")])]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("The external IP for the service mesh load balancer")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("For example, "),s("code",[e._v("'172.17.0.29'")])])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[e._v("anthos_service_mesh_sidecar_enable")])]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("A list of namespaces where Istio sidecar injection will be enabled.")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("For example, "),s("code",[e._v("['hipster']")])])])])]),e._v(" "),s("p",[e._v("An example for service mesh configuration in a user cluster is shown below:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("gke_cluster_config:\n    - name: 'user-cluster-1'\n      type: 'user'\n      ...\n      anthos_service_mesh_enable: true\n      anthos_service_mesh_externalIP: '172.17.0.29'  \n      anthos_service_mesh_sidecar_enable: ['hipster'] \n")])])]),s("h2",{attrs:{id:"service-mesh-version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#service-mesh-version"}},[e._v("#")]),e._v(" Service mesh version")]),e._v(" "),s("p",[e._v("The version of service mesh deployed is determined by the values of the variables in the file\n"),s("code",[e._v("playbooks/roles/gke_cluster_config/service_mesh/vars/main.yml")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("service_mesh_namespace: istio-system\nservice_mesh_version: 'istio-1.6.4-asm.9'\nservice_mesh_platform: 'linux-amd64'\n\nistio_tar_file_url: https://storage.googleapis.com/gke-release/asm/{{ service_mesh_version }}-{{ service_mesh_platform }}.tar.gz\nistio_tar_file_sig: https://storage.googleapis.com/gke-release/asm/{{ service_mesh_version }}-{{ service_mesh_platform }}.tar.gz.1.sig\n")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);