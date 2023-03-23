<template>
  <div class="pa-5">
    <h2 class="pb-3 blue--text text-center">Documentation</h2>
    <v-divider></v-divider>
    <div class="mt-5 pa-5 content">
      <p>
        Make your reviews, surveys and feedback forms easier to integrate in your website much faster and without wasting space.
      </p>
      <h3>
        Widget in action
      </h3>
      <section>
        <img src="../assets/working.gif">
      </section>
      <h3>Survey creation</h3>
      <section>
        <h4 class="font-weight-regular">
          1. Go to the frontend application
          <a class="red--text text--lighten-2"
            >https://survey-app-4e7d6.web.app/auth</a
          >
          and login using credential.
        </h4>
        <div class="image mt-2 pl-5">
          <img src="../assets/login.png" width="80%" />
        </div>
      </section>
      <section>
        <h4 class="font-weight-regular">
          2. Create a new survey by selecting option "Create survey" in left
          navigation bar
        </h4>
        <div class="image mt-2 pl-5">
          <img src="../assets/create-survey.png" width="80%" />
        </div>
      </section>
      <section>
        <h4 class="font-weight-regular">
          3. Once survey is created, list of surveys created can be found under
          the tab "Survey list".
        </h4>
        <div class="image mt-2 pl-5">
          <img src="../assets/survey-list.png" width="80%" />
        </div>
      </section>

      <section>
        <h4 class="font-weight-regular">
          4. To implement survey in websites, we need "User ID" and "Survey ID".
          Both can be found in the dashboard.
        </h4>
        <div class="image mt-2 pl-5 d-flex justify-space-between">
          <img src="../assets/survey-id.png" width="40%" />
          <img src="../assets/user-id.jpg" width="40%" />
        </div>
      </section>

      <h3 class="mt-5">Integrating survey in web pages</h3>
      <section>
        <h4 class="font-weight-regular">
          1. Import CSS and JS files from the given cdn links, both under the
          head tag
        </h4>
        <div class="mt-2 pl-5">
          <p class="font-weight-regular blue--text">CSS</p>
          <code
            > 
              &lt;link href="https://firebasestorage.googleapis.com/v0/b/survey-sdk.appspot.com/o/survey%2Fapp.css?alt=media&token=5e1fb622-3a11-42cf-ae4e-77f66f3cfd01" rel="stylesheet"&gt;
            </code
          >
        </div>
        <div class="mt-5 pl-5">
          <p class="font-weight-regular blue--text">JS</p>
          <code
            >
            &lt;script defer src="https://firebasestorage.googleapis.com/v0/b/survey-sdk.appspot.com/o/survey%2Fapp.js?alt=media&token=843bfd32-079a-447f-97cb-08bf2c462cd3"&gt;&lt;/script&gt;
            </code
          >
        </div>
      </section>
      <section>
        <h4 class="font-weight-regular">
          2. Add attributes class with value "form-btn", "data-id" with value of
          "Survey ID" and "data-user-id" with value of "User Id" to the HTML tag
          which will open up the survey modal.
        </h4>
        <div class="mt-5 pl-5">
          <code>
            &lt;div class='form-btn' data-id='xxx'
            data-user-id='xxxxxx'&gt;Click here to open survey&lt;/div&gt;
          </code>
        </div>
      </section>

      <section>
        <h4 class="font-weight-regular">
          3. If all the data is correctly put in place, the survey will be
          displayed inside a modal.
        </h4>
        <div class="image mt-2 pl-5 d-flex justify-space-between">
          <v-img
            class="bg-white"
            width="150"
            :aspect-ratio="2"
            src="../assets/modal.png"
          ></v-img>
          <v-img
            class="bg-white ml-8"
            width="30"
            :aspect-ratio="1"
            src="../assets/modal-2.png"
          ></v-img>
        </div>
      </section>
    </div>
  </div>
</template>
<style scoped>
section {
  padding: 3rem;
}
.content {
  width: 70%;
}
</style>