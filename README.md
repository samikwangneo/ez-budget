# EZ Budget 💸

<p align="center">
  <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D" alt="Vue.js Badge"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js Badge"/>
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase Badge"/>
  <img src="https://img.shields.io/badge/Plaid-000000?style=for-the-badge&logo=plaid&logoColor=white" alt="Plaid Badge"/>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker Badge"/>
  <img src="https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white" alt="Google Cloud Badge"/>
</p>

<p align="center">
  A personal budgeting application designed for users who want a quick, easy, and secure way to manage their finances. EZ Budget simplifies financial tracking by connecting directly to your bank accounts.
</p>

## ✨ Key Features

* **Secure User Authentication:** Managed through **Firebase Authentication** for safe and reliable user login.
* **Automated Transaction Syncing:** Connect your bank accounts using the **Plaid API** to automatically fetch and categorize your transactions.
* **Intuitive Financial Dashboard:** A clean and responsive frontend built with **Vue.js** to visualize your spending, income, and budgets.
* **Robust Backend Services:** A powerful **Node.js** backend to handle API requests, data processing, and user management.
* **Containerized & Cloud-Ready:** Fully containerized with **Docker** for consistent development and seamless deployment on **Google Cloud Run**.

## ⚙️ How It Works

EZ Budget streamlines personal finance management through a secure, multi-layered architecture:

1.  **Authentication:** Users sign up and log in using Firebase Authentication, which provides a secure token.
2.  **Bank Linking:** On the frontend, the user initiates a connection to their bank via the Plaid Link widget. This widget securely handles user credentials and provides a public token.
3.  **API Integration:** The frontend sends this public token to the Node.js backend. The backend then communicates with the Plaid API to exchange the public token for an access token, which is securely stored.
4.  **Data Fetching:** The backend uses this access token to fetch transaction and account data from the Plaid API, ensuring user banking credentials are never exposed to the server.
5.  **Data Display:** The backend processes and serves this financial data to the Vue.js frontend, where it is displayed to the user in an easy-to-understand format.

## 🛠️ Tech Stack

| Category            | Technology                                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------------------------- |
| **Frontend** | `Vue.js`, `JavaScript`, `HTML5`, `CSS3`                                                                       |
| **Backend** | `Node.js`, `Express.js` (assumed)                                                                                   |
| **Authentication** | `Firebase Authentication`                                                                                     |
| **API Integration** | `Plaid API`                                                                                                   |
| **Database** | `Firebase Firestore` or `Realtime Database` (assumed for user data)                                             |
| **Containerization**| `Docker`                                                                                                      |
| **Deployment** | `Google Cloud Run`                                                                                            |

## 🚀 Getting Started

Follow these instructions to get a local copy of EZ Budget up and running.

### Prerequisites

* Node.js and npm: [https://nodejs.org/](https://nodejs.org/)
* Docker Desktop: [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)
* Google Cloud SDK (for deployment): [https://cloud.google.com/sdk/docs/install](https://cloud.google.com/sdk/docs/install)
* A Firebase project with Authentication enabled.
* A Plaid developer account with API keys (Sandbox is free).

### Installation & Local Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/](https://github.com/)[your-username]/ez-budget.git
    cd ez-budget
    ```

2.  **Set up the Backend (Node.js Server):**
    * Navigate to the backend directory (assuming `backend` folder):
        ```sh
        cd backend
        ```
    * Install npm packages:
        ```sh
        npm install
        ```
    * Create a `.env` file from the example. **This is a crucial step.**
        ```sh
        touch .env
        ```
    * Add your secret keys and Firebase configuration to the `.env` file. It should look like this:
        ```
        # Plaid API Keys
        PLAID_CLIENT_ID=your_plaid_client_id
        PLAID_SECRET=your_plaid_secret
        PLAID_ENV=sandbox

        # Firebase Admin SDK Configuration (as a single line of JSON)
        FIREBASE_CONFIG='{"type": "service_account", "project_id": "...", ...}'

        # Server Configuration
        PORT=8080
        ```
    * Start the backend server:
        ```sh
        npm start
        ```
    * The backend will be running on `http://localhost:8080`.

3.  **Set up the Frontend (Vue.js App):**
    * Open a **new terminal** and navigate to the frontend directory (assuming `frontend` folder):
        ```sh
        cd ../frontend
        ```
    * Install npm packages:
        ```sh
        npm install
        ```
    * Start the Vue development server:
        ```sh
        npm run serve
        ```
    * The frontend will be running on `http://localhost:3000` (or similar).

### 🐳 Running with Docker

Once the `.env` file is configured in the backend, you can build and run the entire application using Docker.

1.  **Build the Docker image** from the project's root directory:
    ```sh
    docker build -t ez-budget .
    ```

2.  **Run the Docker container:**
    ```sh
    docker run -p 8080:8080 -d ez-budget
    ```
    * This command maps the container's port 8080 to your local machine's port 8080 and runs it in detached mode.

### ☁️ Deployment to Google Cloud Run

This project is configured for easy deployment to Google Cloud Run.

1.  **Enable Google Cloud Services:** Ensure you have enabled Cloud Run and Artifact Registry APIs in your GCP project.

2.  **Configure gcloud:** Authenticate and set your project.
    ```sh
    gcloud auth login
    gcloud config set project [YOUR_GCP_PROJECT_ID]
    ```

3.  **Build and Push the Docker Image to Google Artifact Registry:**
    ```sh
    gcloud builds submit --tag gcr.io/[YOUR_GCP_PROJECT_ID]/ez-budget
    ```

4.  **Deploy to Cloud Run:**
    ```sh
    gcloud run deploy ez-budget-service \
      --image gcr.io/[YOUR_GCP_PROJECT_ID]/ez-budget \
      --platform managed \
      --region [YOUR_GCP_REGION] \
      --allow-unauthenticated
    ```
    * This will provide a public URL where your service is deployed. You will be prompted to set environment variables (your Plaid and Firebase secrets) during the deployment process.

## 🔮 Future Development

* [ ] Add functionality for creating and tracking monthly budgets.
* [ ] Implement data visualization with charts for spending trends.
* [ ] Introduce goal-setting features for savings targets.
* [ ] Add support for manual transaction entries.

---
<p align="center">
Designed and Developed by samikwangneo
</p>
