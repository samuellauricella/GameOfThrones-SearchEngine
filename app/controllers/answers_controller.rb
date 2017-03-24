class AnswersController < ApplicationController
  before_action :authorize_user, except: [:index, :show]

def create
  @question = Question.find(params[:question_id])
  @user = current_user
  @answer = Answer.new(answer_params)
  @answer.question = @question
  @answer.user = @user

  if @answer.save
    flash[:notice] = "Answer added successfully"
    redirect_to question_path(@question)
  else
    flash[:notice] = @answer.errors.full_messages
    @creator = @question.user
    @answers = @question.answers
    @answer = Answer.new
    render "questions/show"
  end
end

  def new
      @question = Question.find(params[:question_id])
      @answer = Answer.new
  end

  def edit
    @question = Question.find(params[:question_id])
    @answer = Answer.find(params[:id])
  end

  def update
    @question = Question.find(params[:question_id])
    @answer = Answer.find(params[:id])

  if @answer.update(answer_params)
    redirect_to @question, notice: 'Answer was successfully updated.'
  else
    render :edit
    end
  end

  def destroy
    @question = Question.find(params[:question_id])
    @answer = Answer.find_by(user: current_user, question: @question)
    @question.destroy
    redirect_to question_path(@question), notice: 'Question was successfully Deleted.'
  end

  private

  def answer_params
    params.require(:answer).permit(:title, :body, :question_id)
  end

  def authorize_user
    if !user_signed_in?
      flash[:notice] = "Please log in to use this feature"
      redirect_to new_user_session_path
    end
  end
end
