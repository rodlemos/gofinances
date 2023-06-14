<!-- Logo -->
<p align="center">
  <a href="https://github.com/rodlemos/ignite-gofinances">
    <img src="https://github.com/rodlemos/ignite-gofinances/blob/main/assets/icon.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">GoFinances</h3>

  <p align="center">
   Finances management App project created with React Native
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project 

GoFinances is a simple App to easily manage your finances. The user can register incomes and outcomes, 
the app will return a balance and a monthly graphic of the expenses by category. This is a learning project
of Rocketseat Ignite React Native course.

<p align="center">
  <img src="https://github.com/rodlemos/ignite-gofinances/blob/main/src/assets/screen1.jpg"/>
  <img src="https://github.com/rodlemos/ignite-gofinances/blob/main/src/assets/screen2.jpg"/>
  <img src="https://github.com/rodlemos/ignite-gofinances/blob/main/src/assets/screen3.jpg"/>
</p>

### Built With

* <img src="https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB"/>
* <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white"/>
* <img src="https://img.shields.io/badge/Expo-F8F8F5?style=flat&logo=expo&logoColor=000020"/>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

To run the application install expo client:
* Expo-cli
  ```sh
  npm install --global expo-cli
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/rodlemos/ignite-gofinances.git
   ```
2. Install dependencies
   ```sh
   npm install

    or

   yarn
   ```
   
3. Set environment variables
  * For the login with google you must set a google credential and an expo redirect URI in the .env file:
     ```sh
     CLIENT_ID=
     REDIRECT_URI=
     ```

<!-- USAGE EXAMPLES -->
## Usage

To create an entry select the tab "Cadastrar". You must give a name and a value, select a type: income or outcome,
and choose a category from the list then press the buttom to save.

Your entries will be listed in the "Listagem" tab along with the last income, last outcome and balance. 
A graphic of the expenses by each category will also be available in the "Resumo" tab.

<!-- LICENSE -->
## License

Distributed under the MIT License.


<!-- CONTACT -->
## Contact

<b>Rodrigo Lemos</b>
[![Linkedin](https://img.shields.io/badge/-LinkedIn-blue?style=plastic&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/rod-lemos/)
[![Gmail](https://img.shields.io/badge/-Gmail-c14438?style=plastic&logo=Gmail&logoColor=white)](mailto:rodrigosllemos@gmail.com)
