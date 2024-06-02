# NordSecurity homework task

## To review the project:

Clone the repository and run `npm install`.

To start the application, run `npm run dev` or `npm run build` & `npm run preview`.

## Implementation:

1. **Project set up:** Vite and React framework were used to set up a simple single page application. Vite was chosen due to hot reload provided by the build tool, and React was chosen due to component-based approach and application state-based UI.
2. **Routing:** `react-router-dom` was used to set up routing for the application.
3. **Addition of Google Tag Manager:** `react-gtm-module` was used to add GTM to the application. Reasoning: cleaner code, smoother interaction with data layer.
4. **Setting the cookie:** as per task requirements, using a util function `setChannelCookie`, a channel cookie value is set based on URL parameter`utm_medium` when user visits the homepage. If the parameter is not present, the channel is assumed to be direct. At the moment, a new cookie is set when a user visits the homepage. The reason - it is assumed that a new channel takes precedence to reflect the latest channel the user has accessed the page. However, if the cookie had to be deleted, or different cookies had to be set to reflect several visits of the user, the source code could be adjusted accordingly. Also, alternatively, the cookie could be set using GTM instead of source code.
5. **Form and validation:** a form with required fields has been set up on `/contacts` page. The form contains simple validation (no empty fields, correct formulation of email address). The user is able to access the `submit` button only when all the fields are filled. Related errors are displayed.
6. **Form submission:** upon submission, form values are added to a dataLayer.
7. **GTM variables:** variables for each form input are created as Data Layer Variables (naming - `FormField_FieldName`), taking the values from data layer. Channel variable is created under name `EGLEDIRMEITYTE_channel`, as a 1st-Party Cookie variable. And finally, candidate name is created as a constant variable under name `Candidate name`.
8. **GTM tag:** using the pre-setup Form Submission trigger, a tag `Send_data_to_endpoint` is created. It contains custom HTML that performs a GET request to the specified endpoint, using the variables that were set up in the previous step.
9. **Styling and responsive design:** the application is styled and media breakpoints are added to accommodate different screen sizes.
