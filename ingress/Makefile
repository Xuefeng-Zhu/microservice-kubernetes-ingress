deploy: build push
	-kubectl create -f nginx-ingress-rc.yaml
	-kubectl create -f secret.yaml
	-kubectl create -f ingress.yaml
