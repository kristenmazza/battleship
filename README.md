# Getting Started
1. Use this template to create a new repository on Github
2. Clone your new repository from Github to your local environment
3. Update project name and other relevant attributes in package.json
4. Install dependencies (`npm install`)
5. Generate assets (`npm run build`)
6. Run server (`npm start`)
7. Run tests with `npm test`

# Setting up Github Workflow to Deploy Web App
1. Create SSH deploy key

    Generate your deploy key with the following command:
    ```
    ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f gh-pages -N ""
    ```
    You will get 2 files:
    1. `gh-pages.pub` is a public key
    2. `gh-pages` is a private key

2. Set SSH deploy keys in Github repository settings
   1. Go to Deploy Keys and add your public key with the Allow write access
   2. Go to Secrets and add your private key as `DEPLOY_KEY`

3. Clean up the two now unnecessary gh-pages files on the local system