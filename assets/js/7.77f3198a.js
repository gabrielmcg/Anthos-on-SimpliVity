(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{391:function(e,a,t){e.exports=t.p+"assets/img/kiali-dashboard.77ed29fb.png"},392:function(e,a,t){e.exports=t.p+"assets/img/kiali-versioned-app-graph.8542cdea.png"},393:function(e,a,t){e.exports=t.p+"assets/img/kiali-all-3.dd07fdf6.png"},466:function(e,a,t){"use strict";t.r(a);var s=t(35),i=Object(s.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"deploying-kiali"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deploying-kiali"}},[e._v("#")]),e._v(" Deploying Kiali")]),e._v(" "),s("p",[e._v("Kiali helps you to visualize different aspects of your Istio mesh. For more information, see the Istio 1.6 documentation for using Kiali at\n"),s("a",{attrs:{href:"https://istio.io/latest/docs/tasks/observability/kiali/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://istio.io/latest/docs/tasks/observability/kiali/"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"create-kiali-secret"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-kiali-secret"}},[e._v("#")]),e._v(" Create Kiali secret")]),e._v(" "),s("p",[e._v("Create a secret in your Istio namespace with the credentials that you use to authenticate to Kiali.")]),e._v(" "),s("p",[e._v("First, define the credentials you want to use as the Kiali username and passphrase.")]),e._v(" "),s("p",[e._v("Enter a Kiali username when prompted:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("KIALI_USERNAME=$(read -p 'Kiali Username: ' uval && echo -n $uval | base64)\n")])])]),s("p",[e._v("Enter a Kiali passphrase when prompted:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("KIALI_PASSPHRASE=$(read -sp 'Kiali Passphrase: ' pval && echo -n $pval | base64)\n")])])]),s("p",[e._v("Create the Kiali secret:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cat <<EOF | kubectl apply -f -\napiVersion: v1\nkind: Secret\nmetadata:\n  name: kiali\n  namespace: istio-system\n  labels:\n    app: kiali\ntype: Opaque\ndata:\n  username: $KIALI_USERNAME\n  passphrase: $KIALI_PASSPHRASE\nEOF\n")])])]),s("h2",{attrs:{id:"enable-kiali-in-istio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enable-kiali-in-istio"}},[e._v("#")]),e._v(" Enable Kiali in Istio")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("istioctl")]),e._v(" binary is available in the Istio installation director, for example:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/home/ubuntu/istio-1.6.4-asm.9/bin\n")])])]),s("p",[e._v("Use the "),s("code",[e._v("istioctl")]),e._v(" command to configure Kiali:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("istioctl manifest apply --set values.kiali.enabled=true\n")])])]),s("p",[e._v("To verify that the service is running in your cluster, run the following command:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("kubectl -n istio-system get svc kiali\n\nNAME    TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)     AGE\nkiali   ClusterIP   10.96.110.173   <none>        20001/TCP   61s\n")])])]),s("p",[e._v("To access the Kiali interface, you can use port forwarding, or patch the service to create a LoadBalancer:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('kubectl -n istio-system patch svc kiali    --type merge --patch \'{"spec":{"loadBalancerIP": "10.15.158.99","type":"LoadBalancer"}}\'\n')])])]),s("p",[e._v("Check that the service has changed:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("kubectl -n istio-system get svc kiali  \n\nNAME    TYPE           CLUSTER-IP      EXTERNAL-IP    PORT(S)           AGE\nkiali   LoadBalancer   10.96.110.173   10.15.158.99   20001:30248/TCP   17m\n")])])]),s("p",[e._v("You can now access the cluster externally at "),s("code",[e._v("http://10.15.158.99:20001/")]),e._v("  or internally at  "),s("code",[e._v("http://10.15.155.124:30248/")]),e._v(".")]),e._v(" "),s("p",[e._v("Log in with the username/password combination you specified when creating the Kiali secret.")]),e._v(" "),s("p",[s("img",{attrs:{src:t(391),alt:' "Kiali dashboard"'}})]),e._v(" "),s("p",[s("strong",[e._v("Figure.")]),e._v(" Kiali dashboard")]),e._v(" "),s("h2",{attrs:{id:"create-load"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-load"}},[e._v("#")]),e._v(" Create load")]),e._v(" "),s("p",[e._v("Use the "),s("code",[e._v("watch")]),e._v(" command with "),s("code",[e._v("curl")]),e._v(" to access the homepage every second.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("watch -n 1 curl -o /dev/null -s -w %{http_code} 10.15.158.55/productpage\n")])])]),s("h2",{attrs:{id:"view-the-versioned-app-graph-for-the-bookinfo-application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#view-the-versioned-app-graph-for-the-bookinfo-application"}},[e._v("#")]),e._v(" View the "),s("code",[e._v("Versioned app graph")]),e._v("  for the Bookinfo application")]),e._v(" "),s("p",[e._v("Choose "),s("code",[e._v("Graph")]),e._v(" in the navigator section on the left hand side of the UI. Then, ensure that "),s("code",[e._v("bookinfo")]),e._v(" is  selected\nas the namespace and  choose "),s("code",[e._v("Versioned app graph")]),e._v(" as the graph type.")]),e._v(" "),s("p",[s("img",{attrs:{src:t(392),alt:' "Kiali Versioned app graph"'}})]),e._v(" "),s("p",[s("strong",[e._v("Figure.")]),e._v(" Kiali Versioned app graph")]),e._v(" "),s("h2",{attrs:{id:"view-distribution-of-requests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#view-distribution-of-requests"}},[e._v("#")]),e._v(" View distribution of requests")]),e._v(" "),s("p",[e._v("You can modify the graph to show the distribution of requests across the three versions of the reviews service.")]),e._v(" "),s("ul",[s("li",[e._v("Make sure you select "),s("code",[e._v("Requests percentage")]),e._v(' in the "Edge Labels" drop down menu to see the percentage of traffic routed to each workload.')]),e._v(" "),s("li",[e._v("Make sure you select the "),s("code",[e._v("Service Nodes")]),e._v(' check box in the "Display" drop down menu to view the service nodes in the graph.')])]),e._v(" "),s("p",[s("img",{attrs:{src:t(393),alt:' "Kiali requests percentage"'}})]),e._v(" "),s("p",[s("strong",[e._v("Figure.")]),e._v(" Kiali requests percentage")]),e._v(" "),s("p",[e._v("The graph shows the requests are distributed equally across the three versions of the reviews service.")])])}),[],!1,null,null,null);a.default=i.exports}}]);