(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{431:function(e,a,s){"use strict";s.r(a);var t=s(35),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"storage-class"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#storage-class"}},[e._v("#")]),e._v(" Storage class")]),e._v(" "),s("p",[e._v("GKE on-prem can integrate with block or file storage by using any of the following mechanisms:")]),e._v(" "),s("ul",[s("li",[e._v("VMWare vSphere Storage")]),e._v(" "),s("li",[e._v("Kubernetes in-tree volume plugins")]),e._v(" "),s("li",[e._v("Container Storage Interface (CSI)")])]),e._v(" "),s("p",[e._v("When you create a cluster, GKE on-prem creates a Kubernetes StorageClass named "),s("code",[e._v("standard")]),e._v(". This is the default StorageClass for the cluster.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("export KUBECONFIG=~/kubeconfigs/gmcg-gke-usercluster-1-kubeconfig\nkubectl get storageclass\n\nNAME                 PROVISIONER                    AGE\nstandard (default)   kubernetes.io/vsphere-volume   10d\n")])])]),s("p",[e._v("If you have configured CSI storage and have run the CSI playbook "),s("code",[e._v("playbooks/csi.yml")]),e._v(", either as part of "),s("code",[e._v("site.yml")]),e._v(" or standalone, you will have a second storage class available:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("kubectl get storageclass\n\nNAME                 PROVISIONER                    AGE\ngmcg-vmware-sc       csi.vsphere.vmware.com         18s\nstandard (default)   kubernetes.io/vsphere-volume   10d\n")])])]),s("p",[e._v("When you create a PersistentVolumeClaim that does not specify a StorageClass, the volume controller will fulfil the claim according to the default StorageClass. If you look at the details of the "),s("code",[e._v("standard")]),e._v(" storage class, you will see the "),s("code",[e._v('storageclass.kubernetes.io/is-default-class: "true"')]),e._v(" annotation. This annotation identifies the StorageClass named "),s("code",[e._v("standard")]),e._v(" as the default StorageClass.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('kubectl get storageclass standard -o yaml\n\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  annotations:\n    bundle.gke.io/create-only: "true"\n    storageclass.kubernetes.io/is-default-class: "true"\n  creationTimestamp: "2020-06-15T17:31:19Z"\n  labels:\n    bundle.gke.io/component-name: storage-class\n    bundle.gke.io/component-version: 1.4.0-gke.13\n  name: standard\n  resourceVersion: "332"\n  selfLink: /apis/storage.k8s.io/v1/storageclasses/standard\n  uid: 7a118854-2405-461a-bded-a449373a1360\nparameters:\n  datastore: Anthos_HPE\n  diskformat: thin\n  fstype: ext4\nprovisioner: kubernetes.io/vsphere-volume\nreclaimPolicy: Delete\nvolumeBindingMode: Immediate\n')])])]),s("p",[e._v("To change the default storage class, you can patch the "),s("code",[e._v("standard")]),e._v(" storage class:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('kubectl patch storageclass standard -p \'{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"false"}}}\'\n')])])]),s("p",[e._v("Patch the storage class created using the CSI driver:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('kubectl patch storageclass gmcg-vmware-sc -p \'{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}\'\n')])])]),s("p",[e._v("Now, when you get the summary information for all storage classes, you will see that the default has been changed:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("kubectl get storageclass\n\nNAME                       PROVISIONER                    AGE\ngmcg-vmware-sc (default)   csi.vsphere.vmware.com         5m51s\nstandard                   kubernetes.io/vsphere-volume   10d\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);