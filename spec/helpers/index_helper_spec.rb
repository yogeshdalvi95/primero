require 'spec_helper'

describe IndexHelper do
  before do
    @view = Object.new
    @view.extend(IndexHelper)
  end

  context "Viewing cases"  do
    context "when CP" do
      before :each do
        @view.instance_variable_set(:@is_cp, true)
        @view.instance_variable_set(:@is_gbv, false)
      end

      context "when the signed in user is a field worker" do
        before :each do
          @view.instance_variable_set(:@is_manager, false)
        end
        it "should return a header list" do
          @view.list_view_header('case').should == [
                                                    {:title=>"id", :sort_title=>"short_id"}, 
                                                    {:title=>"name", :sort_title=>"sortable_name"}, 
                                                    {:title=>"age", :sort_title=>"age"}, 
                                                    {:title=>"sex", :sort_title=>"sex"}, 
                                                    {:title=>"registration_date", :sort_title=>"registration_date"}, 
                                                    {:title=>"photo", :sort_title=>"photo"}
                                                   ]
        end
      end

      context "when the signed in user is a manager" do
        before :each do
          @view.instance_variable_set(:@is_manager, true)
        end
        it "should return a header list" do
          @view.list_view_header('case').should == [
                                                    {:title=>"social_worker", :sort_title=>"owned_by_text"}, 
                                                    {:title=>"id", :sort_title=>"short_id"}, 
                                                    {:title=>"age", :sort_title=>"age"}, 
                                                    {:title=>"sex", :sort_title=>"sex"}, 
                                                    {:title=>"registration_date", :sort_title=>"registration_date"}, 
                                                    {:title=>"photo", :sort_title=>"photo"}
                                                   ]
        end
      end
      
    end

    context "when GBV" do
      before :each do
        @view.instance_variable_set(:@is_cp, false)
        @view.instance_variable_set(:@is_gbv, true)
      end

      context "when the signed in user is a field worker" do
        before :each do
          @view.instance_variable_set(:@is_manager, false)
        end
        it "should return a header list" do
          @view.list_view_header('case').should == [
                                                    {:title=>"id", :sort_title=>"short_id"},
                                                    {:title=>"survivor_code", :sort_title=>"survivor_code_no"},
                                                    {:title=>"case_opening_date", :sort_title=>"case_opening_date"}
                                                   ]
        end
      end

      context "when the signed in user is a manager" do
        before :each do
          @view.instance_variable_set(:@is_manager, true)
        end
        it "should return a header list" do
          @view.list_view_header('case').should == [
                                                    {:title=>"social_worker", :sort_title=>"owned_by_text"}, 
                                                    {:title=>"id", :sort_title=>"short_id"}, 
                                                    {:title=>"case_opening_date", :sort_title=>"case_opening_date"}
                                                   ]
        end
      end
    end
  end

  context "Viewing incidents"  do
    #TODO - coming in future story
  end

  context "Viewing tracing requests"  do
    #TODO - coming in future story
  end
end
