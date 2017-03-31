require "rails_helper"

feature "user can add question" do
  let!(:user) { FactoryGirl.create(:user) }

  scenario "authenitcated user adds new question successfully" do
    sign_in(user)

    click_link "Discussion Board"
    click_link "Add New Question"

    fill_in 'Title', with: "Hodor"
    fill_in 'Describe your post', with: "Hodor Hodor"

    click_button "Submit"

  end

  scenario "authenticated visitor does not provide proper information for a question" do
    user = FactoryGirl.create(:user)
    sign_in(user)

    visit new_question_path

    click_button "Submit"
    expect(page).to have_content("New Post")
  end

  scenario "unauthenticated visitor tris to add a user" do
    visit new_question_path

    expect(page).to have_current_path(new_user_session_path)
    expect(page).to have_content("Welcome Back!")
  end
end
