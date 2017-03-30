class QuestionsController < ApplicationController
  before_action :authorize_user, except: [:index, :show]

  def index
    @questions = Question.all

  end

  def show
    @question = Question.find(params[:id])
    @creator = @question.user
    @answer = Answer.new
    @answers = @question.answers
  end

  def new
    @question = Question.new
  end

  def edit
    @question = Question.find(params[:id])
  end

  def create
    @question = Question.new(question_params)

    @question.user = current_user

    if @question.save
      flash[:notice] = "Question added successfully"
      redirect_to question_path(@question)
    else
      flash[:notice] = @question.errors.full_messages
      render :new
    end
  end

  def update
    @question = Question.find(params[:id])

    if @question.update(question_params)
      redirect_to @question, notice: 'Question was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @question = Question.find(params[:id])
    @question.destroy
    redirect_to questions_url, notice: 'Question was successfully destroyed.'
  end

  private

  def question_params
    params.require(:question).permit(:title, :body)
  end

  def authorize_user
    unless user_signed_in? || (current_user)
      flash[:notice] = "Please log in to use this feature"
      redirect_to new_user_session_path
    end
  end

end
