require "rails_helper"

feature "user can review a theater" do
  let!(:user1) { FactoryGirl.create(:user) }
  let!(:user2) { FactoryGirl.create(:user) }
  let!(:question) { FactoryGirl.create(:question, user: user1) }

  scenario "authenitcated user adds new answer successfully" do
    sign_in(user1)
    visit question_path(question)

    fill_in 'Respond Here', with: "this is a answer"
    click_button "Submit"

    expect(page).to have_content(user1.first_name)
    expect(page).to have_content("this is a answer")
  end

  scenario "authenitcated user submits invalid answer" do
    sign_in(user1)
    visit question_path(question)

    click_button "Submit"

    expect(page).to_not have_content("this is a answer")
  end


  scenario "unauthenitcated user attempts to submit answer" do
    visit question_path(question)

    click_button "Submit"
    expect(page).to have_current_path(new_user_session_path)
    expect(page).to have_content("Welcome Back!")
    expect(page).to_not have_content(question.title)
  end

  scenario "Comment owner can delete comment" do
    sign_in(user1)
    visit question_path(question)

    fill_in 'Respond Here', with: "this is a comment"
    click_button "Submit"
    click_link "Remove Comment"

    expect(page).to_not have_content("this is a comment")
  end

  scenario "Answer owner can edit answer" do
    Answer.create(body:"hello", question: question, user: user1)
    sign_in(user1)
    visit question_path(question)

    click_link "Edit Comment"

    fill_in 'Respond Here', with: "bye"
    click_button "Submit"

    expect(page).to_not have_content("hello")
    expect(page).to have_content("bye")
  end

  scenario "authenitcated user cannot delete or edit anothers answer" do
    Answer.create(body: "hello", user: user1, question: question)
    sign_in(user2)
    visit question_path(question)

    expect(page).to_not have_content("Edit Comment")
  end

  scenario "un-authenitcated user cannot edit answer" do
    visit question_path(question)

    expect(page).to_not have_content("Edit")
  end
end
