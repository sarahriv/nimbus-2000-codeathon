# nimbus-2000-codeathon

# COVID Vaccine Eligibility and Location Portal

This site is designed to assist people in determining if they are eligible for the COVID vaccine based on age, underlying health conditions, and occupation guidelines. 
This site requires little input from the user and if eligible will provide a list of locations that they can contact to make their appointment 
for the vaccine.

Welcome Page

This page will require the user to input thier age, occupation, and if they have an underlying medical condition.  Once the user hits submit, thier eligbility will be determine in the backend. Based on the outcome the user will either be shown a message advising they are not eligible and further actions to take or if eligible they will be directed to the Enter Zip Code Page.



Results Page

This page will only appear if the user is eligible to obtain the vaccine.  The user will be prompted to input thier zip code which will result in an AJAX call to obtain the locations in thier area.  The list of locations will include location, available days, hours of operation and phone number.

