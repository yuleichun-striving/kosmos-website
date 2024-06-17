"use strict";(self.webpackChunkzfile_docs=self.webpackChunkzfile_docs||[]).push([[620],{2692:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=n(7624),t=n(2172);const r={id:"node-not-ready",title:"Kosmos Node NotReady"},i="Kosmos Node NotReady",a={id:"v0.2.0/tutorials/node-not-ready",title:"Kosmos Node NotReady",description:"Kosmos Node NotReady Solution",source:"@site/docs/v0.2.0/tutorials/node-not-ready.md",sourceDirName:"v0.2.0/tutorials",slug:"/v0.2.0/tutorials/node-not-ready",permalink:"/website/v0.2.0/tutorials/node-not-ready",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/v0.2.0/tutorials/node-not-ready.md",tags:[],version:"current",lastUpdatedBy:"Qi Wang",lastUpdatedAt:1718612828,formattedLastUpdatedAt:"Jun 17, 2024",frontMatter:{id:"node-not-ready",title:"Kosmos Node NotReady"},sidebar:"tutorialSidebar",previous:{title:"Design of EXEC and Log in Kosmos",permalink:"/website/v0.2.0/tutorials/exe-and-log"},next:{title:"IPsec Cross-cluster Network",permalink:"/website/v0.2.0/tutorials/ipsec-network"}},l={},d=[{value:"Kosmos Node NotReady Solution",id:"kosmos-node-notready-solution",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Solution: Integrating Kyverno to solve the kosmos node is not ready",id:"solution-integrating-kyverno-to-solve-the-kosmos-node-is-not-ready",level:3},{value:"What is an admission webhook?",id:"what-is-an-admission-webhook",level:4},{value:"Solution",id:"solution",level:4},{value:"install Kyverno",id:"install-kyverno",level:5},{value:"Configuring clusterpolicy",id:"configuring-clusterpolicy",level:4}];function c(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h1,{id:"kosmos-node-notready",children:"Kosmos Node NotReady"}),"\n",(0,s.jsx)(o.h2,{id:"kosmos-node-notready-solution",children:"Kosmos Node NotReady Solution"}),"\n",(0,s.jsx)(o.h3,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(o.p,{children:["Assuming that we have registered the cluster ",(0,s.jsx)(o.code,{children:"cluster7"})," on the master cluster:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-shell",metastring:"script",children:"$ kubectl get node\r\nNAME               STATUS   ROLES                         AGE     VERSION\r\necs-54004033-001   Ready    worker                        50d     v1.21.5\r\necs-54004033-002   Ready    control-plane,master,worker   50d     v1.21.5\r\nkosmos-cluster7    Ready    agent                         5d22h   v1.21.5\n"})}),"\n",(0,s.jsxs)(o.p,{children:["The clustertree-cluster-manager of Kosmos will continuously monitor the resource usage and cluster status of the ",(0,s.jsx)(o.code,{children:"cluster7"})," cluster, and update it to the leaf node ",(0,s.jsx)(o.code,{children:"kosmos-cluster7"})," on the master cluster."]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-shell",metastring:"script",children:"$ kubectl get deploy -nkosmos-system\r\nNAME                             READY   UP-TO-DATE   AVAILABLE   AGE\r\nclusterlink-controller-manager   1/1     1            1           5d22h\r\nclusterlink-elector              2/2     2            2           5d22h\r\nclusterlink-network-manager      1/1     1            1           5d22h\r\nclustertree-cluster-manager      1/1     1            1           5d22h\r\nkosmos-operator                  1/1     1            1           5d22h\r\nkosmos-webhook                   1/1     1            1           11\n"})}),"\n",(0,s.jsxs)(o.p,{children:["If there is a network fluctuation between the master cluster and the ",(0,s.jsx)(o.code,{children:"cluster7"})," cluster, Kosmos will detect this anomaly and set the status of the leaf node ",(0,s.jsx)(o.code,{children:"kosmos-cluster7"}),' on the master cluster to "not ready". This will trigger the pod eviction behavior in Kubernetes, meaning that the pods on the "not ready" node will be evicted to other ready nodes.']}),"\n",(0,s.jsxs)(o.p,{children:["However, due to network fluctuations, the status of ",(0,s.jsx)(o.code,{children:"kosmos-cluster7"}),' may become "ready" again during the eviction process. But the events of the originally evicted pods will still be sent to the "cluster7" cluster, causing normal running pods on the "cluster7" cluster to be deleted or restarted, thus affecting the business.']}),"\n",(0,s.jsx)(o.h3,{id:"solution-integrating-kyverno-to-solve-the-kosmos-node-is-not-ready",children:"Solution: Integrating Kyverno to solve the kosmos node is not ready"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"https://kyverno.io/",children:"Kyverno"})," validate, mutate, generate, and cleanup configurations using Kubernetes admission webhook, background scans, and source code repository scans. Kyverno policies can be managed as Kubernetes resources."]}),"\n",(0,s.jsx)(o.p,{children:"Its main functions are as follows:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"validate, mutate, generate, or cleanup (remove) any resource"}),"\n",(0,s.jsx)(o.li,{children:"verify container images for software supply chain security"}),"\n",(0,s.jsx)(o.li,{children:"match resources using label selectors and wildcards"}),"\n",(0,s.jsx)(o.li,{children:"synchronize configurations across Namespaces"}),"\n",(0,s.jsx)(o.li,{children:"block non-conformant resources using admission controls, or report policy violations"}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"This article explains how to use Kyverno's admission webhook to prevent pod expulsion when the kosmos node is not ready."}),"\n",(0,s.jsx)(o.h4,{id:"what-is-an-admission-webhook",children:"What is an admission webhook?"}),"\n",(0,s.jsx)(o.p,{children:'An "admission webhook" is a piece of code that intercepts requests to the Kubernetes API Server before object persistence. It allows requests to pass through after authentication and authorization. Admission controllers can perform validation, mutation, or both. Mutating controllers modify the resource objects they handle, while Validating controllers do not. If any controller in any phase rejects a request, the entire request will be immediately rejected, and the error will be returned to the end user.'}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"K8s_Admission_Webhook.png",src:n(7788).c+"",width:"2401",height:"721"})}),"\n",(0,s.jsx)(o.h4,{id:"solution",children:"Solution"}),"\n",(0,s.jsx)(o.h5,{id:"install-kyverno",children:"install Kyverno"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"https://kyverno.io/docs/installation/methods/",children:"Install Kyverno"})}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-shell",metastring:"script",children:"kubectl create -f https://github.com/kyverno/kyverno/releases/download/v1.10.0/install.yaml\n"})}),"\n",(0,s.jsx)(o.h4,{id:"configuring-clusterpolicy",children:"Configuring clusterpolicy"}),"\n",(0,s.jsx)(o.p,{children:"There are four scenarios in which k8s evicts the pod:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"User initiated"})," : The user initiates the evict request initiated by the API. For example, all Pods on the node are evicted during node maintenance to avoid the impact on services caused by the node going offline suddenly."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Kubelet initiated"})," : Periodically checks the resources of the node. When the resources are insufficient, some Pods are evicted based on the priority."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"kube-controller-manager Initiate"})," : Periodically detects all nodes. When a node is in the NotReady state for more than a period of time, all Pods on the node are evicted so that they are scheduled to other normal nodes for re-running. When taint evict is enabled, the pod that cannot tolerate the taint is exicted immediately after there is a 'NoExecute' taint on node. For the pod that can tolerate the taint, the pod will be evicted after the minimum taint tolerance time configured on the pod."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"kube-scheduler Initiating"})," : When preemptive scheduling is implemented, the low-priority Pod may be evicted to make room for the high-priority & preemptive Pod, so that the high-priority Pod can be scheduled normally"]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"With the following profile, we will only block pod deletion events that meet the following three conditions:"}),"\n",(0,s.jsx)(o.p,{children:"(1) Node status is NotReady"}),"\n",(0,s.jsx)(o.p,{children:"(2) Node is a KosmosNode"}),"\n",(0,s.jsxs)(o.p,{children:["(3) the Username is system: serviceaccount: kube-system",":node-controller"," (belong to kube-controller-manager of node-controller )"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-yaml",children:'apiVersion: kyverno.io/v1\r\nkind: ClusterPolicy\r\nmetadata:\r\n  name: kosmos-node-not-ready\r\nspec:\r\n  validationFailureAction: Enforce\r\n  background: false\r\n  rules:\r\n  - match:\r\n      any:\r\n      - resources:\r\n          kinds:\r\n          - Pod\r\n          operations:\r\n          - DELETE\r\n    name: kosmos-node-not-read\r\n    context:\r\n    - name: nodeStatus\r\n      apiCall:\r\n        urlPath: /api/v1/nodes/{{request.oldObject.spec.nodeName}}\r\n        jmesPath: status.conditions[?type==\'Ready\'].status | [0]\r\n    - name: isKosmosNode\r\n      apiCall:\r\n        urlPath: /api/v1/nodes/{{request.oldObject.spec.nodeName}}\r\n        jmesPath: metadata.labels."kosmos.io/node"\r\n    preconditions:\r\n      all:\r\n      - key: "{{ request.userInfo.username }}"\r\n        operator: Equals\r\n        value: "system:serviceaccount:kube-system:node-controller"\r\n      - key: "{{ nodeStatus }}"\r\n        operator: NotEquals\r\n        value: "True" \r\n      - key: "{{ length(isKosmosNode) }}"\r\n        operator: GreaterThan\r\n        value: 0\r\n    validate:\r\n      message: " {{ request.userInfo.username }} delete pod {{request.oldObject.metadata.name}} of NotReady Kosmos {{request.oldObject.spec.nodeName}} Node is not allowed. "\r\n      deny: {}\n'})}),"\n",(0,s.jsx)(o.p,{children:"When the status of Kosmos node is notready, the Pods on this node are blocked. You can view the following logs by viewing the kyverno-admission-controller"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-shell",metastring:"script",children:'handlers.go:139] webhooks/resource/validate "msg"="admission request denied" "clusterroles"=["system:basic-user","system:controller:node-controller","system:discovery","system:public-info-viewer","system:service-account-issuer-discovery"] "gvk"={"group":"","version":"v1","kind":"Pod"} "gvr"={"group":"","version":"v1","resource":"pods"} "kind"="Pod" "name"="example-deployment-6cc4fd9bd7-kkm8z" "namespace"="default" "operation"="DELETE" "resource.gvk"={"Group":"","Version":"v1","Kind":"Pod"} "roles"=null "uid"="7f25ee88-4522-45fd-a6ba-38733122b443" "user"={"username":"system:serviceaccount:kube-system:node-controller","uid":"5a13be66-71fd-40e3-9553-00eb0825fbb0","groups":["system:serviceaccounts","system:serviceaccounts:kube-system","system:authenticated"]}\r\nevent.go:307] "Event occurred" object="kosmos-node-not-ready" fieldPath="" kind="ClusterPolicy" apiVersion="kyverno.io/v1" type="Warning" reason="PolicyViolation" message="Pod default/example-deployment-6cc4fd9bd7-kkm8z: [kosmos-node-not-ready] fail (blocked);  system:serviceaccount:kube-system:node-controller delete pod example-deployment-6cc4fd9bd7-kkm8z of NotReady Kosmos kosmos-cluster2 Node is not allowed. "\r\nvalidation.go:103] webhooks/resource/validate "msg"="validation failed" "action"="Enforce" "clusterroles"=["system:basic-user","system:controller:node-controller","system:discovery","system:public-info-viewer","system:service-account-issuer-discovery"] "failed rules"=["kosmos-node-not-ready"] "gvk"={"group":"","version":"v1","kind":"Pod"} "gvr"={"group":"","version":"v1","resource":"pods"} "kind"="Pod" "name"="example-deployment-6cc4fd9bd7-sb7m7" "namespace"="default" "operation"="DELETE" "policy"="kosmos-node-not-ready" "resource"="default/Pod/example-deployment-6cc4fd9bd7-sb7m7" "resource.gvk"={"Group":"","Version":"v1","Kind":"Pod"} "roles"=null "uid"="251f1877-4f2c-40ec-9bca-8ceb7c9c845f" "user"={"username":"system:serviceaccount:kube-system:node-controller","uid":"5a13be66-71fd-40e3-9553-00eb0825fbb0","groups":["system:serviceaccounts","system:serviceaccounts:kube-system","system:authenticated"]}\n'})})]})}function u(e={}){const{wrapper:o}={...(0,t.M)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},7788:(e,o,n)=>{n.d(o,{c:()=>s});const s=n.p+"assets/images/K8s_Admission_Webhook-d80e6ba8089fbf07bf3bf24a5302860a.png"},2172:(e,o,n)=>{n.d(o,{I:()=>a,M:()=>i});var s=n(1504);const t={},r=s.createContext(t);function i(e){const o=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:o},e.children)}}}]);