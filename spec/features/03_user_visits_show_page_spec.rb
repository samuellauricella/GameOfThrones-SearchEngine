require 'rails_helper'

feature "visitor sees information for a specific question" do
  let!(:user) { FactoryGirl.create(:user) }
  let!(:question) { FactoryGirl.create(:question, user: user) }

  scenario "sees question information and link to edit and destroy" do
    sign_in(user)
    visit question_path(question)

    expect(page).to have_content question.title
    expect(page).to have_content question.body


    expect(page).to have_link "Remove #{question.title}"
    expect(page).to have_link "Edit"
  end

  scenario "authenticated user clicks link and is taken to edit" do
    sign_in(user)
    visit question_path(question)
    click_link "Edit"
    expect(page).to have_content "Editing #{question.title}"

    # fill_in 'Title', with: "Not hodor"
    # fill_in 'Describe your post', with: "really"
    # click_button "Submit"
    #
    # expect(page).to have_content "Not hodor"
  end

  scenario "clicks remove link and record is removed" do
    sign_in(user)
    visit question_path(question)
    click_link "Remove #{question.title}"

    expect(page).to_not have_content question.title
  end

  scenario "unauthenticated user clicks link and is taken to edit" do
    visit question_path(question)

    expect(page).to_not have_content("Edit")
    expect(page).to_not have_content("Remove #{question.title}")
  end
end
