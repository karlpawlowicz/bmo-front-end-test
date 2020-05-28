# Technical Questions

1. **How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.**

   5-6 hours. If I had more time I would I would work on the following (no particular order):

   - City toggle: Some type of component to toggle a city such as a dropdown or input to input a different city
   - Components: Create some form components to keep my code DRY
   - Error handling to validate input, including a `aria-invalid="true"` on invalid input for users that cannot visually see that an input is incorrect
   - Geolocation: Some type of service (browser or Google API) to return a default city
   - Pagination: The API returns `total_entries`, `per_page` and `current_page` values, which should be used to create pagination
   - redux-query-sync: Adding more filters and using redux-query-sync to store them in Redux
   - Sagas
   - Skeleton Screens: I am a big fan of this UX pattern and would implement this as the loading state
   - SSR
   - styled-components: Refactor to use more utilities/shared components
   - Tests: I would continue to add more unit tests, starting with testing the Redux actions

2. **What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.**

   In terms of React, that would be hooks as seen in the `RestaurantsPage` component:

   ```sh
   const dispatch = useDispatch();
   const restaurants = useSelector(selectRestaurantByName);
   const isPending = useSelector((state) => state.allRestaurants.isPending);
   const isFailure = useSelector((state) => state.allRestaurants.isFailure);
   const { city } = useParams();
   const [name, setName] = useState('');
   ```

3. **How would you track down a performance issue in production? Have you ever had to do this?**

   There are a number of ways I could track down a performance issue. These depend on the type of issue, but here are ways I have tracked down issues in the past:

   - Lighthouse tests with Chrome, or PageSpeed Insights tests are typically the first place to start for a snapshot of important metrics such as time to paint and suggestions directly from Google
   - Performance profiling with Chrome
   - Analyzing data from tools such as NewRelic and Rollbar, as well as raw server logs
   - For specific browser/device issues, triaging the issue using BrowserStack or Android Studio/XCode to access device simulators
   - For very odd browser/device issues, I have had to physically connect to the troublesome device to monitor developer tools while physically using the device

4. **How would you improve the API that you just used?**

   The API may already do this, but instead of filtering restaurants on the client, the API route should accept filter parameters. Displaying the cuisine type and rating were in the requirements, but were not included in the API response. These would need to be added. Outside of the scope of the project requirements and on a performance note, I would recommend returning source sets for images, instead of a single size, although this could be handled on the client as well using something like an image resize service.

5. **Please describe yourself using JSON.**

   ```sh
   {
       "firstName": "Karl",
       "lastName": "Pawlowicz",
       "age": 32,
       "house": "Slytherin",
       "interests": ["photography", "space"]
   }
   ```
