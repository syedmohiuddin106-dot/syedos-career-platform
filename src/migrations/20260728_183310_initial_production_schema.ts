import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_users_role" AS ENUM('super-admin', 'editor');
  CREATE TYPE "public"."enum_projects_technologies_category" AS ENUM('frontend', 'backend', 'database', 'ai', 'cloud', 'devops', 'testing', 'tool', 'other');
  CREATE TYPE "public"."enum_projects_project_type" AS ENUM('full-stack', 'ai', 'cloud-devops', 'frontend', 'backend', 'academic', 'other');
  CREATE TYPE "public"."enum_projects_development_status" AS ENUM('planning', 'in-development', 'completed', 'maintained', 'archived');
  CREATE TYPE "public"."enum_projects_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__projects_v_version_technologies_category" AS ENUM('frontend', 'backend', 'database', 'ai', 'cloud', 'devops', 'testing', 'tool', 'other');
  CREATE TYPE "public"."enum__projects_v_version_project_type" AS ENUM('full-stack', 'ai', 'cloud-devops', 'frontend', 'backend', 'academic', 'other');
  CREATE TYPE "public"."enum__projects_v_version_development_status" AS ENUM('planning', 'in-development', 'completed', 'maintained', 'archived');
  CREATE TYPE "public"."enum__projects_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_skills_category" AS ENUM('programming-language', 'frontend', 'backend', 'database', 'ai', 'cloud', 'devops', 'testing', 'cybersecurity', 'tool', 'soft-skill', 'other');
  CREATE TYPE "public"."enum_skills_proficiency" AS ENUM('beginner', 'intermediate', 'advanced', 'professional');
  CREATE TYPE "public"."enum_skills_accent_style" AS ENUM('blue', 'cyan', 'teal', 'violet', 'amber', 'emerald');
  CREATE TYPE "public"."enum_skills_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__skills_v_version_category" AS ENUM('programming-language', 'frontend', 'backend', 'database', 'ai', 'cloud', 'devops', 'testing', 'cybersecurity', 'tool', 'soft-skill', 'other');
  CREATE TYPE "public"."enum__skills_v_version_proficiency" AS ENUM('beginner', 'intermediate', 'advanced', 'professional');
  CREATE TYPE "public"."enum__skills_v_version_accent_style" AS ENUM('blue', 'cyan', 'teal', 'violet', 'amber', 'emerald');
  CREATE TYPE "public"."enum__skills_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_education_education_level" AS ENUM('secondary-school', 'higher-secondary', 'diploma', 'undergraduate', 'postgraduate', 'doctorate', 'professional-certification', 'other');
  CREATE TYPE "public"."enum_education_result_type" AS ENUM('cgpa', 'gpa', 'percentage', 'grade', 'pass', 'not-applicable');
  CREATE TYPE "public"."enum_education_academic_standing" AS ENUM('distinction', 'first-class', 'second-class', 'pass', 'in-progress', 'not-applicable');
  CREATE TYPE "public"."enum_education_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__education_v_version_education_level" AS ENUM('secondary-school', 'higher-secondary', 'diploma', 'undergraduate', 'postgraduate', 'doctorate', 'professional-certification', 'other');
  CREATE TYPE "public"."enum__education_v_version_result_type" AS ENUM('cgpa', 'gpa', 'percentage', 'grade', 'pass', 'not-applicable');
  CREATE TYPE "public"."enum__education_v_version_academic_standing" AS ENUM('distinction', 'first-class', 'second-class', 'pass', 'in-progress', 'not-applicable');
  CREATE TYPE "public"."enum__education_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_certifications_certification_type" AS ENUM('professional-certification', 'professional-certificate', 'course-certificate', 'specialization', 'skill-badge', 'workshop', 'internship', 'participation', 'other');
  CREATE TYPE "public"."enum_certifications_credential_status" AS ENUM('completed', 'in-progress', 'expired', 'planned');
  CREATE TYPE "public"."enum_certifications_accent_style" AS ENUM('blue', 'cyan', 'teal', 'violet', 'amber', 'emerald');
  CREATE TYPE "public"."enum_certifications_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__certifications_v_version_certification_type" AS ENUM('professional-certification', 'professional-certificate', 'course-certificate', 'specialization', 'skill-badge', 'workshop', 'internship', 'participation', 'other');
  CREATE TYPE "public"."enum__certifications_v_version_credential_status" AS ENUM('completed', 'in-progress', 'expired', 'planned');
  CREATE TYPE "public"."enum__certifications_v_version_accent_style" AS ENUM('blue', 'cyan', 'teal', 'violet', 'amber', 'emerald');
  CREATE TYPE "public"."enum__certifications_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_experience_supporting_documents_document_type" AS ENUM('certificate', 'offer-letter', 'completion-letter', 'recommendation', 'project-report', 'other');
  CREATE TYPE "public"."enum_experience_experience_type" AS ENUM('internship', 'full-time', 'part-time', 'freelance', 'contract', 'academic-project', 'leadership', 'volunteer', 'training', 'other');
  CREATE TYPE "public"."enum_experience_work_mode" AS ENUM('onsite', 'remote', 'hybrid');
  CREATE TYPE "public"."enum_experience_accent_style" AS ENUM('blue', 'cyan', 'teal', 'violet', 'amber', 'emerald');
  CREATE TYPE "public"."enum_experience_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__experience_v_version_supporting_documents_document_type" AS ENUM('certificate', 'offer-letter', 'completion-letter', 'recommendation', 'project-report', 'other');
  CREATE TYPE "public"."enum__experience_v_version_experience_type" AS ENUM('internship', 'full-time', 'part-time', 'freelance', 'contract', 'academic-project', 'leadership', 'volunteer', 'training', 'other');
  CREATE TYPE "public"."enum__experience_v_version_work_mode" AS ENUM('onsite', 'remote', 'hybrid');
  CREATE TYPE "public"."enum__experience_v_version_accent_style" AS ENUM('blue', 'cyan', 'teal', 'violet', 'amber', 'emerald');
  CREATE TYPE "public"."enum__experience_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_media_media_type" AS ENUM('profile-photo', 'project-cover', 'project-screenshot', 'institution-logo', 'organization-logo', 'issuer-logo', 'certificate', 'resume', 'document', 'general');
  CREATE TYPE "public"."enum_media_visibility" AS ENUM('public', 'private', 'unlisted');
  CREATE TYPE "public"."enum_profile_languages_proficiency" AS ENUM('basic', 'conversational', 'professional', 'native-bilingual');
  CREATE TYPE "public"."enum_profile_preferred_work_modes" AS ENUM('remote', 'hybrid', 'onsite');
  CREATE TYPE "public"."enum_profile_social_links_platform" AS ENUM('linkedin', 'github', 'portfolio', 'email', 'youtube', 'x', 'instagram', 'other');
  CREATE TYPE "public"."enum_profile_availability_status" AS ENUM('open-to-internships', 'open-to-part-time', 'open-to-full-time', 'open-to-freelance', 'not-available');
  CREATE TYPE "public"."enum_profile_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__profile_v_version_languages_proficiency" AS ENUM('basic', 'conversational', 'professional', 'native-bilingual');
  CREATE TYPE "public"."enum__profile_v_version_preferred_work_modes" AS ENUM('remote', 'hybrid', 'onsite');
  CREATE TYPE "public"."enum__profile_v_version_social_links_platform" AS ENUM('linkedin', 'github', 'portfolio', 'email', 'youtube', 'x', 'instagram', 'other');
  CREATE TYPE "public"."enum__profile_v_version_availability_status" AS ENUM('open-to-internships', 'open-to-part-time', 'open-to-full-time', 'open-to-freelance', 'not-available');
  CREATE TYPE "public"."enum__profile_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_contact_submissions_inquiry_type" AS ENUM('internship', 'job', 'freelance', 'collaboration', 'academic', 'general', 'other');
  CREATE TYPE "public"."enum_contact_submissions_preferred_contact_method" AS ENUM('email', 'phone', 'linkedin');
  CREATE TYPE "public"."enum_contact_submissions_submission_status" AS ENUM('new', 'reviewed', 'replied', 'archived', 'spam');
  CREATE TYPE "public"."enum_contact_submissions_priority" AS ENUM('low', 'normal', 'high', 'urgent');
  CREATE TYPE "public"."enum_site_settings_social_links_platform" AS ENUM('linkedin', 'github', 'youtube', 'x', 'instagram', 'email', 'other');
  CREATE TYPE "public"."enum_site_settings_analytics_provider" AS ENUM('vercel', 'google', 'plausible', 'other');
  CREATE TYPE "public"."enum_site_settings_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__site_settings_v_version_social_links_platform" AS ENUM('linkedin', 'github', 'youtube', 'x', 'instagram', 'email', 'other');
  CREATE TYPE "public"."enum__site_settings_v_version_analytics_provider" AS ENUM('vercel', 'google', 'plausible', 'other');
  CREATE TYPE "public"."enum__site_settings_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"role" "enum_users_role" DEFAULT 'super-admin' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "projects_technologies" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"category" "enum_projects_technologies_category" DEFAULT 'other'
  );
  
  CREATE TABLE "projects_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "projects_responsibilities" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE "projects_seo_keywords" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"keyword" varchar
  );
  
  CREATE TABLE "projects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_order" varchar,
  	"title" varchar,
  	"slug" varchar,
  	"project_type" "enum_projects_project_type" DEFAULT 'full-stack',
  	"development_status" "enum_projects_development_status" DEFAULT 'completed',
  	"short_description" varchar,
  	"full_description" varchar,
  	"github_u_r_l" varchar,
  	"live_u_r_l" varchar,
  	"documentation_u_r_l" varchar,
  	"cover_image_u_r_l" varchar,
  	"cover_image_alt" varchar,
  	"featured" boolean DEFAULT false,
  	"display_order" numeric DEFAULT 100,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_projects_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_projects_v_version_technologies" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"category" "enum__projects_v_version_technologies_category" DEFAULT 'other',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_projects_v_version_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_projects_v_version_responsibilities" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_projects_v_version_seo_keywords" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"keyword" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_projects_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version__order" varchar,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_project_type" "enum__projects_v_version_project_type" DEFAULT 'full-stack',
  	"version_development_status" "enum__projects_v_version_development_status" DEFAULT 'completed',
  	"version_short_description" varchar,
  	"version_full_description" varchar,
  	"version_github_u_r_l" varchar,
  	"version_live_u_r_l" varchar,
  	"version_documentation_u_r_l" varchar,
  	"version_cover_image_u_r_l" varchar,
  	"version_cover_image_alt" varchar,
  	"version_featured" boolean DEFAULT false,
  	"version_display_order" numeric DEFAULT 100,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__projects_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "skills_capabilities" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "skills_learning_sources" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"provider" varchar,
  	"url" varchar
  );
  
  CREATE TABLE "skills_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE "skills_seo_keywords" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"keyword" varchar
  );
  
  CREATE TABLE "skills" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_order" varchar,
  	"name" varchar,
  	"slug" varchar,
  	"category" "enum_skills_category" DEFAULT 'frontend',
  	"proficiency" "enum_skills_proficiency" DEFAULT 'intermediate',
  	"proficiency_percentage" numeric DEFAULT 70,
  	"years_of_experience" numeric,
  	"short_description" varchar,
  	"icon_name" varchar,
  	"featured" boolean DEFAULT false,
  	"display_order" numeric DEFAULT 100,
  	"accent_style" "enum_skills_accent_style" DEFAULT 'blue',
  	"badge_label" varchar,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_skills_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "skills_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"projects_id" integer
  );
  
  CREATE TABLE "_skills_v_version_capabilities" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_skills_v_version_learning_sources" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"provider" varchar,
  	"url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_skills_v_version_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_skills_v_version_seo_keywords" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"keyword" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_skills_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version__order" varchar,
  	"version_name" varchar,
  	"version_slug" varchar,
  	"version_category" "enum__skills_v_version_category" DEFAULT 'frontend',
  	"version_proficiency" "enum__skills_v_version_proficiency" DEFAULT 'intermediate',
  	"version_proficiency_percentage" numeric DEFAULT 70,
  	"version_years_of_experience" numeric,
  	"version_short_description" varchar,
  	"version_icon_name" varchar,
  	"version_featured" boolean DEFAULT false,
  	"version_display_order" numeric DEFAULT 100,
  	"version_accent_style" "enum__skills_v_version_accent_style" DEFAULT 'blue',
  	"version_badge_label" varchar,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__skills_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_skills_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"projects_id" integer
  );
  
  CREATE TABLE "education_coursework" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"course_name" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "education_achievements" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"year" numeric
  );
  
  CREATE TABLE "education_activities" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "education_seo_keywords" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"keyword" varchar
  );
  
  CREATE TABLE "education" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_order" varchar,
  	"institution" varchar,
  	"slug" varchar,
  	"education_level" "enum_education_education_level",
  	"qualification" varchar,
  	"field_of_study" varchar,
  	"specialization" varchar,
  	"university" varchar,
  	"location" varchar,
  	"institution_website" varchar,
  	"start_year" numeric,
  	"end_year" numeric,
  	"currently_studying" boolean DEFAULT false,
  	"expected_completion" varchar,
  	"result_type" "enum_education_result_type" DEFAULT 'cgpa',
  	"result" varchar,
  	"result_scale" varchar,
  	"academic_standing" "enum_education_academic_standing",
  	"summary" varchar,
  	"featured" boolean DEFAULT false,
  	"display_order" numeric DEFAULT 100,
  	"logo_path" varchar,
  	"logo_alt" varchar,
  	"certificate_u_r_l" varchar,
  	"badge_label" varchar,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_education_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "education_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"skills_id" integer,
  	"projects_id" integer
  );
  
  CREATE TABLE "_education_v_version_coursework" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"course_name" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_education_v_version_achievements" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"year" numeric,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_education_v_version_activities" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_education_v_version_seo_keywords" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"keyword" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_education_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version__order" varchar,
  	"version_institution" varchar,
  	"version_slug" varchar,
  	"version_education_level" "enum__education_v_version_education_level",
  	"version_qualification" varchar,
  	"version_field_of_study" varchar,
  	"version_specialization" varchar,
  	"version_university" varchar,
  	"version_location" varchar,
  	"version_institution_website" varchar,
  	"version_start_year" numeric,
  	"version_end_year" numeric,
  	"version_currently_studying" boolean DEFAULT false,
  	"version_expected_completion" varchar,
  	"version_result_type" "enum__education_v_version_result_type" DEFAULT 'cgpa',
  	"version_result" varchar,
  	"version_result_scale" varchar,
  	"version_academic_standing" "enum__education_v_version_academic_standing",
  	"version_summary" varchar,
  	"version_featured" boolean DEFAULT false,
  	"version_display_order" numeric DEFAULT 100,
  	"version_logo_path" varchar,
  	"version_logo_alt" varchar,
  	"version_certificate_u_r_l" varchar,
  	"version_badge_label" varchar,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__education_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_education_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"skills_id" integer,
  	"projects_id" integer
  );
  
  CREATE TABLE "certifications_learning_outcomes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "certifications_instructors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"role" varchar
  );
  
  CREATE TABLE "certifications_seo_keywords" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"keyword" varchar
  );
  
  CREATE TABLE "certifications" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_order" varchar,
  	"title" varchar,
  	"slug" varchar,
  	"issuer" varchar,
  	"certification_type" "enum_certifications_certification_type" DEFAULT 'professional-certificate',
  	"issuer_website" varchar,
  	"description" varchar,
  	"credential_i_d" varchar,
  	"credential_u_r_l" varchar,
  	"issue_date" timestamp(3) with time zone,
  	"expiry_date" timestamp(3) with time zone,
  	"does_not_expire" boolean DEFAULT true,
  	"credential_status" "enum_certifications_credential_status" DEFAULT 'completed',
  	"completion_progress" numeric,
  	"estimated_hours" numeric,
  	"score" varchar,
  	"assessment_details" varchar,
  	"featured" boolean DEFAULT false,
  	"display_order" numeric DEFAULT 100,
  	"certificate_image_path" varchar,
  	"certificate_image_alt" varchar,
  	"issuer_logo_path" varchar,
  	"issuer_logo_alt" varchar,
  	"badge_label" varchar,
  	"accent_style" "enum_certifications_accent_style" DEFAULT 'blue',
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_certifications_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "certifications_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"skills_id" integer,
  	"projects_id" integer
  );
  
  CREATE TABLE "_certifications_v_version_learning_outcomes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_certifications_v_version_instructors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"role" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_certifications_v_version_seo_keywords" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"keyword" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_certifications_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version__order" varchar,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_issuer" varchar,
  	"version_certification_type" "enum__certifications_v_version_certification_type" DEFAULT 'professional-certificate',
  	"version_issuer_website" varchar,
  	"version_description" varchar,
  	"version_credential_i_d" varchar,
  	"version_credential_u_r_l" varchar,
  	"version_issue_date" timestamp(3) with time zone,
  	"version_expiry_date" timestamp(3) with time zone,
  	"version_does_not_expire" boolean DEFAULT true,
  	"version_credential_status" "enum__certifications_v_version_credential_status" DEFAULT 'completed',
  	"version_completion_progress" numeric,
  	"version_estimated_hours" numeric,
  	"version_score" varchar,
  	"version_assessment_details" varchar,
  	"version_featured" boolean DEFAULT false,
  	"version_display_order" numeric DEFAULT 100,
  	"version_certificate_image_path" varchar,
  	"version_certificate_image_alt" varchar,
  	"version_issuer_logo_path" varchar,
  	"version_issuer_logo_alt" varchar,
  	"version_badge_label" varchar,
  	"version_accent_style" "enum__certifications_v_version_accent_style" DEFAULT 'blue',
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__certifications_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_certifications_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"skills_id" integer,
  	"projects_id" integer
  );
  
  CREATE TABLE "experience_responsibilities" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "experience_achievements" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"metric" varchar
  );
  
  CREATE TABLE "experience_supporting_documents" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"url" varchar,
  	"document_type" "enum_experience_supporting_documents_document_type" DEFAULT 'other'
  );
  
  CREATE TABLE "experience_seo_keywords" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"keyword" varchar
  );
  
  CREATE TABLE "experience" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_order" varchar,
  	"role" varchar,
  	"slug" varchar,
  	"organization" varchar,
  	"experience_type" "enum_experience_experience_type" DEFAULT 'internship',
  	"location" varchar,
  	"work_mode" "enum_experience_work_mode" DEFAULT 'onsite',
  	"organization_website" varchar,
  	"summary" varchar,
  	"start_date" timestamp(3) with time zone,
  	"end_date" timestamp(3) with time zone,
  	"currently_working" boolean DEFAULT false,
  	"duration_label" varchar,
  	"team_size" numeric,
  	"supervisor_name" varchar,
  	"supervisor_role" varchar,
  	"supervisor_organization" varchar,
  	"certificate_u_r_l" varchar,
  	"project_u_r_l" varchar,
  	"organization_logo_path" varchar,
  	"organization_logo_alt" varchar,
  	"featured" boolean DEFAULT false,
  	"display_order" numeric DEFAULT 100,
  	"badge_label" varchar,
  	"accent_style" "enum_experience_accent_style" DEFAULT 'blue',
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_experience_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "experience_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"skills_id" integer,
  	"projects_id" integer
  );
  
  CREATE TABLE "_experience_v_version_responsibilities" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_experience_v_version_achievements" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"metric" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_experience_v_version_supporting_documents" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"url" varchar,
  	"document_type" "enum__experience_v_version_supporting_documents_document_type" DEFAULT 'other',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_experience_v_version_seo_keywords" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"keyword" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_experience_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version__order" varchar,
  	"version_role" varchar,
  	"version_slug" varchar,
  	"version_organization" varchar,
  	"version_experience_type" "enum__experience_v_version_experience_type" DEFAULT 'internship',
  	"version_location" varchar,
  	"version_work_mode" "enum__experience_v_version_work_mode" DEFAULT 'onsite',
  	"version_organization_website" varchar,
  	"version_summary" varchar,
  	"version_start_date" timestamp(3) with time zone,
  	"version_end_date" timestamp(3) with time zone,
  	"version_currently_working" boolean DEFAULT false,
  	"version_duration_label" varchar,
  	"version_team_size" numeric,
  	"version_supervisor_name" varchar,
  	"version_supervisor_role" varchar,
  	"version_supervisor_organization" varchar,
  	"version_certificate_u_r_l" varchar,
  	"version_project_u_r_l" varchar,
  	"version_organization_logo_path" varchar,
  	"version_organization_logo_alt" varchar,
  	"version_featured" boolean DEFAULT false,
  	"version_display_order" numeric DEFAULT 100,
  	"version_badge_label" varchar,
  	"version_accent_style" "enum__experience_v_version_accent_style" DEFAULT 'blue',
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__experience_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_experience_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"skills_id" integer,
  	"projects_id" integer
  );
  
  CREATE TABLE "media_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar NOT NULL
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"alt" varchar NOT NULL,
  	"caption" varchar,
  	"media_type" "enum_media_media_type" DEFAULT 'general' NOT NULL,
  	"visibility" "enum_media_visibility" DEFAULT 'public' NOT NULL,
  	"featured" boolean DEFAULT false,
  	"display_order" numeric DEFAULT 100 NOT NULL,
  	"credit" varchar,
  	"copyright_notice" varchar,
  	"notes" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_card_url" varchar,
  	"sizes_card_width" numeric,
  	"sizes_card_height" numeric,
  	"sizes_card_mime_type" varchar,
  	"sizes_card_filesize" numeric,
  	"sizes_card_filename" varchar,
  	"sizes_hero_url" varchar,
  	"sizes_hero_width" numeric,
  	"sizes_hero_height" numeric,
  	"sizes_hero_mime_type" varchar,
  	"sizes_hero_filesize" numeric,
  	"sizes_hero_filename" varchar
  );
  
  CREATE TABLE "profile_languages" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"language" varchar,
  	"proficiency" "enum_profile_languages_proficiency" DEFAULT 'professional'
  );
  
  CREATE TABLE "profile_career_interests" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "profile_preferred_roles" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"role" varchar
  );
  
  CREATE TABLE "profile_preferred_work_modes" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_profile_preferred_work_modes",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "profile_preferred_locations" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"location" varchar
  );
  
  CREATE TABLE "profile_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_profile_social_links_platform",
  	"label" varchar,
  	"url" varchar,
  	"featured" boolean DEFAULT false
  );
  
  CREATE TABLE "profile_contact_preferences" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"preference" varchar
  );
  
  CREATE TABLE "profile_professional_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"value" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "profile_personal_strengths" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "profile_seo_keywords" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"keyword" varchar
  );
  
  CREATE TABLE "profile" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"full_name" varchar,
  	"slug" varchar,
  	"professional_title" varchar,
  	"short_title" varchar,
  	"headline" varchar,
  	"short_bio" varchar,
  	"full_bio" varchar,
  	"location" varchar,
  	"nationality" varchar,
  	"career_objective" varchar,
  	"availability_status" "enum_profile_availability_status" DEFAULT 'open-to-internships',
  	"higher_education_goal" varchar,
  	"public_email" varchar,
  	"phone" varchar,
  	"profile_photo_id" integer,
  	"resume_id" integer,
  	"resume_label" varchar DEFAULT 'Download Resume',
  	"resume_last_updated" timestamp(3) with time zone,
  	"intro_video_u_r_l" varchar,
  	"featured" boolean DEFAULT true,
  	"hero_badge" varchar,
  	"primary_call_to_action_label" varchar DEFAULT 'View My Work',
  	"primary_call_to_action_url" varchar DEFAULT '/projects',
  	"secondary_call_to_action_label" varchar DEFAULT 'Contact Me',
  	"secondary_call_to_action_url" varchar DEFAULT '/contact',
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_profile_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "profile_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"skills_id" integer
  );
  
  CREATE TABLE "_profile_v_version_languages" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"language" varchar,
  	"proficiency" "enum__profile_v_version_languages_proficiency" DEFAULT 'professional',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_profile_v_version_career_interests" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_profile_v_version_preferred_roles" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"role" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_profile_v_version_preferred_work_modes" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__profile_v_version_preferred_work_modes",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_profile_v_version_preferred_locations" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"location" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_profile_v_version_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"platform" "enum__profile_v_version_social_links_platform",
  	"label" varchar,
  	"url" varchar,
  	"featured" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_profile_v_version_contact_preferences" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"preference" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_profile_v_version_professional_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"value" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_profile_v_version_personal_strengths" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_profile_v_version_seo_keywords" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"keyword" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_profile_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_full_name" varchar,
  	"version_slug" varchar,
  	"version_professional_title" varchar,
  	"version_short_title" varchar,
  	"version_headline" varchar,
  	"version_short_bio" varchar,
  	"version_full_bio" varchar,
  	"version_location" varchar,
  	"version_nationality" varchar,
  	"version_career_objective" varchar,
  	"version_availability_status" "enum__profile_v_version_availability_status" DEFAULT 'open-to-internships',
  	"version_higher_education_goal" varchar,
  	"version_public_email" varchar,
  	"version_phone" varchar,
  	"version_profile_photo_id" integer,
  	"version_resume_id" integer,
  	"version_resume_label" varchar DEFAULT 'Download Resume',
  	"version_resume_last_updated" timestamp(3) with time zone,
  	"version_intro_video_u_r_l" varchar,
  	"version_featured" boolean DEFAULT true,
  	"version_hero_badge" varchar,
  	"version_primary_call_to_action_label" varchar DEFAULT 'View My Work',
  	"version_primary_call_to_action_url" varchar DEFAULT '/projects',
  	"version_secondary_call_to_action_label" varchar DEFAULT 'Contact Me',
  	"version_secondary_call_to_action_url" varchar DEFAULT '/contact',
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__profile_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_profile_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"skills_id" integer
  );
  
  CREATE TABLE "contact_submissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"company" varchar,
  	"phone" varchar,
  	"subject" varchar NOT NULL,
  	"message" varchar NOT NULL,
  	"inquiry_type" "enum_contact_submissions_inquiry_type" DEFAULT 'general' NOT NULL,
  	"preferred_contact_method" "enum_contact_submissions_preferred_contact_method" DEFAULT 'email',
  	"submission_status" "enum_contact_submissions_submission_status" DEFAULT 'new' NOT NULL,
  	"priority" "enum_contact_submissions_priority" DEFAULT 'normal' NOT NULL,
  	"admin_notes" varchar,
  	"response_summary" varchar,
  	"reviewed_at" timestamp(3) with time zone,
  	"replied_at" timestamp(3) with time zone,
  	"assigned_to_id" integer,
  	"source_page" varchar,
  	"referrer" varchar,
  	"user_agent" varchar,
  	"ip_address" varchar,
  	"consent_accepted" boolean DEFAULT false NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"projects_id" integer,
  	"skills_id" integer,
  	"education_id" integer,
  	"certifications_id" integer,
  	"experience_id" integer,
  	"media_id" integer,
  	"profile_id" integer,
  	"contact_submissions_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "site_settings_navigation_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"url" varchar,
  	"open_in_new_tab" boolean DEFAULT false,
  	"highlighted" boolean DEFAULT false
  );
  
  CREATE TABLE "site_settings_footer_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"url" varchar
  );
  
  CREATE TABLE "site_settings_accepted_inquiry_types" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar
  );
  
  CREATE TABLE "site_settings_default_s_e_o_keywords" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"keyword" varchar
  );
  
  CREATE TABLE "site_settings_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_site_settings_social_links_platform",
  	"label" varchar,
  	"url" varchar
  );
  
  CREATE TABLE "site_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"site_name" varchar DEFAULT 'SyedOS',
  	"site_tagline" varchar DEFAULT 'Career Platform and Professional Portfolio',
  	"site_description" varchar,
  	"logo_id" integer,
  	"favicon_id" integer,
  	"brand_initials" varchar DEFAULT 'SM',
  	"show_resume_button" boolean DEFAULT true,
  	"resume_button_label" varchar DEFAULT 'Resume',
  	"footer_description" varchar,
  	"copyright_text" varchar DEFAULT '© 2026 Syed Mohiuddin. All rights reserved.',
  	"show_built_with" boolean DEFAULT true,
  	"built_with_text" varchar DEFAULT 'Built with Next.js, TypeScript, Payload CMS, PostgreSQL, and Docker.',
  	"contact_heading" varchar DEFAULT 'Let’s Build Something Meaningful',
  	"contact_description" varchar,
  	"contact_email" varchar,
  	"response_time" varchar DEFAULT 'Usually responds within 24–48 hours',
  	"default_s_e_o_title" varchar,
  	"default_s_e_o_description" varchar,
  	"default_s_e_o_social_image_id" integer,
  	"maintenance_mode" boolean DEFAULT false,
  	"maintenance_message" varchar,
  	"enable_contact_form" boolean DEFAULT true,
  	"enable_resume_download" boolean DEFAULT true,
  	"enable_analytics" boolean DEFAULT false,
  	"analytics_provider" "enum_site_settings_analytics_provider",
  	"analytics_i_d" varchar,
  	"_status" "enum_site_settings_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_site_settings_v_version_navigation_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"url" varchar,
  	"open_in_new_tab" boolean DEFAULT false,
  	"highlighted" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_site_settings_v_version_footer_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_site_settings_v_version_accepted_inquiry_types" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_site_settings_v_version_default_s_e_o_keywords" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"keyword" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_site_settings_v_version_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"platform" "enum__site_settings_v_version_social_links_platform",
  	"label" varchar,
  	"url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_site_settings_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_site_name" varchar DEFAULT 'SyedOS',
  	"version_site_tagline" varchar DEFAULT 'Career Platform and Professional Portfolio',
  	"version_site_description" varchar,
  	"version_logo_id" integer,
  	"version_favicon_id" integer,
  	"version_brand_initials" varchar DEFAULT 'SM',
  	"version_show_resume_button" boolean DEFAULT true,
  	"version_resume_button_label" varchar DEFAULT 'Resume',
  	"version_footer_description" varchar,
  	"version_copyright_text" varchar DEFAULT '© 2026 Syed Mohiuddin. All rights reserved.',
  	"version_show_built_with" boolean DEFAULT true,
  	"version_built_with_text" varchar DEFAULT 'Built with Next.js, TypeScript, Payload CMS, PostgreSQL, and Docker.',
  	"version_contact_heading" varchar DEFAULT 'Let’s Build Something Meaningful',
  	"version_contact_description" varchar,
  	"version_contact_email" varchar,
  	"version_response_time" varchar DEFAULT 'Usually responds within 24–48 hours',
  	"version_default_s_e_o_title" varchar,
  	"version_default_s_e_o_description" varchar,
  	"version_default_s_e_o_social_image_id" integer,
  	"version_maintenance_mode" boolean DEFAULT false,
  	"version_maintenance_message" varchar,
  	"version_enable_contact_form" boolean DEFAULT true,
  	"version_enable_resume_download" boolean DEFAULT true,
  	"version_enable_analytics" boolean DEFAULT false,
  	"version_analytics_provider" "enum__site_settings_v_version_analytics_provider",
  	"version_analytics_i_d" varchar,
  	"version__status" "enum__site_settings_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_technologies" ADD CONSTRAINT "projects_technologies_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_features" ADD CONSTRAINT "projects_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_responsibilities" ADD CONSTRAINT "projects_responsibilities_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_seo_keywords" ADD CONSTRAINT "projects_seo_keywords_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_version_technologies" ADD CONSTRAINT "_projects_v_version_technologies_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_version_features" ADD CONSTRAINT "_projects_v_version_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_version_responsibilities" ADD CONSTRAINT "_projects_v_version_responsibilities_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_version_seo_keywords" ADD CONSTRAINT "_projects_v_version_seo_keywords_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_parent_id_projects_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "skills_capabilities" ADD CONSTRAINT "skills_capabilities_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "skills_learning_sources" ADD CONSTRAINT "skills_learning_sources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "skills_highlights" ADD CONSTRAINT "skills_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "skills_seo_keywords" ADD CONSTRAINT "skills_seo_keywords_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "skills_rels" ADD CONSTRAINT "skills_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "skills_rels" ADD CONSTRAINT "skills_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_skills_v_version_capabilities" ADD CONSTRAINT "_skills_v_version_capabilities_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_skills_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_skills_v_version_learning_sources" ADD CONSTRAINT "_skills_v_version_learning_sources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_skills_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_skills_v_version_highlights" ADD CONSTRAINT "_skills_v_version_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_skills_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_skills_v_version_seo_keywords" ADD CONSTRAINT "_skills_v_version_seo_keywords_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_skills_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_skills_v" ADD CONSTRAINT "_skills_v_parent_id_skills_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."skills"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_skills_v_rels" ADD CONSTRAINT "_skills_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_skills_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_skills_v_rels" ADD CONSTRAINT "_skills_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education_coursework" ADD CONSTRAINT "education_coursework_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education_achievements" ADD CONSTRAINT "education_achievements_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education_activities" ADD CONSTRAINT "education_activities_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education_seo_keywords" ADD CONSTRAINT "education_seo_keywords_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education_rels" ADD CONSTRAINT "education_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education_rels" ADD CONSTRAINT "education_rels_skills_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education_rels" ADD CONSTRAINT "education_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_education_v_version_coursework" ADD CONSTRAINT "_education_v_version_coursework_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_education_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_education_v_version_achievements" ADD CONSTRAINT "_education_v_version_achievements_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_education_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_education_v_version_activities" ADD CONSTRAINT "_education_v_version_activities_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_education_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_education_v_version_seo_keywords" ADD CONSTRAINT "_education_v_version_seo_keywords_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_education_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_education_v" ADD CONSTRAINT "_education_v_parent_id_education_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."education"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_education_v_rels" ADD CONSTRAINT "_education_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_education_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_education_v_rels" ADD CONSTRAINT "_education_v_rels_skills_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_education_v_rels" ADD CONSTRAINT "_education_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "certifications_learning_outcomes" ADD CONSTRAINT "certifications_learning_outcomes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."certifications"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "certifications_instructors" ADD CONSTRAINT "certifications_instructors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."certifications"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "certifications_seo_keywords" ADD CONSTRAINT "certifications_seo_keywords_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."certifications"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "certifications_rels" ADD CONSTRAINT "certifications_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."certifications"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "certifications_rels" ADD CONSTRAINT "certifications_rels_skills_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "certifications_rels" ADD CONSTRAINT "certifications_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_certifications_v_version_learning_outcomes" ADD CONSTRAINT "_certifications_v_version_learning_outcomes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_certifications_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_certifications_v_version_instructors" ADD CONSTRAINT "_certifications_v_version_instructors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_certifications_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_certifications_v_version_seo_keywords" ADD CONSTRAINT "_certifications_v_version_seo_keywords_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_certifications_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_certifications_v" ADD CONSTRAINT "_certifications_v_parent_id_certifications_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."certifications"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_certifications_v_rels" ADD CONSTRAINT "_certifications_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_certifications_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_certifications_v_rels" ADD CONSTRAINT "_certifications_v_rels_skills_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_certifications_v_rels" ADD CONSTRAINT "_certifications_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "experience_responsibilities" ADD CONSTRAINT "experience_responsibilities_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."experience"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "experience_achievements" ADD CONSTRAINT "experience_achievements_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."experience"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "experience_supporting_documents" ADD CONSTRAINT "experience_supporting_documents_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."experience"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "experience_seo_keywords" ADD CONSTRAINT "experience_seo_keywords_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."experience"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "experience_rels" ADD CONSTRAINT "experience_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."experience"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "experience_rels" ADD CONSTRAINT "experience_rels_skills_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "experience_rels" ADD CONSTRAINT "experience_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_experience_v_version_responsibilities" ADD CONSTRAINT "_experience_v_version_responsibilities_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_experience_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_experience_v_version_achievements" ADD CONSTRAINT "_experience_v_version_achievements_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_experience_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_experience_v_version_supporting_documents" ADD CONSTRAINT "_experience_v_version_supporting_documents_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_experience_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_experience_v_version_seo_keywords" ADD CONSTRAINT "_experience_v_version_seo_keywords_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_experience_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_experience_v" ADD CONSTRAINT "_experience_v_parent_id_experience_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."experience"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_experience_v_rels" ADD CONSTRAINT "_experience_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_experience_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_experience_v_rels" ADD CONSTRAINT "_experience_v_rels_skills_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_experience_v_rels" ADD CONSTRAINT "_experience_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "media_tags" ADD CONSTRAINT "media_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "profile_languages" ADD CONSTRAINT "profile_languages_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."profile"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "profile_career_interests" ADD CONSTRAINT "profile_career_interests_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."profile"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "profile_preferred_roles" ADD CONSTRAINT "profile_preferred_roles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."profile"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "profile_preferred_work_modes" ADD CONSTRAINT "profile_preferred_work_modes_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."profile"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "profile_preferred_locations" ADD CONSTRAINT "profile_preferred_locations_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."profile"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "profile_social_links" ADD CONSTRAINT "profile_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."profile"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "profile_contact_preferences" ADD CONSTRAINT "profile_contact_preferences_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."profile"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "profile_professional_highlights" ADD CONSTRAINT "profile_professional_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."profile"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "profile_personal_strengths" ADD CONSTRAINT "profile_personal_strengths_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."profile"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "profile_seo_keywords" ADD CONSTRAINT "profile_seo_keywords_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."profile"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "profile" ADD CONSTRAINT "profile_profile_photo_id_media_id_fk" FOREIGN KEY ("profile_photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "profile" ADD CONSTRAINT "profile_resume_id_media_id_fk" FOREIGN KEY ("resume_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "profile_rels" ADD CONSTRAINT "profile_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."profile"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "profile_rels" ADD CONSTRAINT "profile_rels_skills_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_profile_v_version_languages" ADD CONSTRAINT "_profile_v_version_languages_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_profile_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_profile_v_version_career_interests" ADD CONSTRAINT "_profile_v_version_career_interests_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_profile_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_profile_v_version_preferred_roles" ADD CONSTRAINT "_profile_v_version_preferred_roles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_profile_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_profile_v_version_preferred_work_modes" ADD CONSTRAINT "_profile_v_version_preferred_work_modes_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_profile_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_profile_v_version_preferred_locations" ADD CONSTRAINT "_profile_v_version_preferred_locations_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_profile_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_profile_v_version_social_links" ADD CONSTRAINT "_profile_v_version_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_profile_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_profile_v_version_contact_preferences" ADD CONSTRAINT "_profile_v_version_contact_preferences_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_profile_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_profile_v_version_professional_highlights" ADD CONSTRAINT "_profile_v_version_professional_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_profile_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_profile_v_version_personal_strengths" ADD CONSTRAINT "_profile_v_version_personal_strengths_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_profile_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_profile_v_version_seo_keywords" ADD CONSTRAINT "_profile_v_version_seo_keywords_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_profile_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_profile_v" ADD CONSTRAINT "_profile_v_parent_id_profile_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."profile"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_profile_v" ADD CONSTRAINT "_profile_v_version_profile_photo_id_media_id_fk" FOREIGN KEY ("version_profile_photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_profile_v" ADD CONSTRAINT "_profile_v_version_resume_id_media_id_fk" FOREIGN KEY ("version_resume_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_profile_v_rels" ADD CONSTRAINT "_profile_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_profile_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_profile_v_rels" ADD CONSTRAINT "_profile_v_rels_skills_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contact_submissions" ADD CONSTRAINT "contact_submissions_assigned_to_id_users_id_fk" FOREIGN KEY ("assigned_to_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_skills_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_education_fk" FOREIGN KEY ("education_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_certifications_fk" FOREIGN KEY ("certifications_id") REFERENCES "public"."certifications"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_experience_fk" FOREIGN KEY ("experience_id") REFERENCES "public"."experience"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_profile_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profile"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_contact_submissions_fk" FOREIGN KEY ("contact_submissions_id") REFERENCES "public"."contact_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_navigation_items" ADD CONSTRAINT "site_settings_navigation_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_footer_links" ADD CONSTRAINT "site_settings_footer_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_accepted_inquiry_types" ADD CONSTRAINT "site_settings_accepted_inquiry_types_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_default_s_e_o_keywords" ADD CONSTRAINT "site_settings_default_s_e_o_keywords_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_social_links" ADD CONSTRAINT "site_settings_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_favicon_id_media_id_fk" FOREIGN KEY ("favicon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_default_s_e_o_social_image_id_media_id_fk" FOREIGN KEY ("default_s_e_o_social_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_site_settings_v_version_navigation_items" ADD CONSTRAINT "_site_settings_v_version_navigation_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_site_settings_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_site_settings_v_version_footer_links" ADD CONSTRAINT "_site_settings_v_version_footer_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_site_settings_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_site_settings_v_version_accepted_inquiry_types" ADD CONSTRAINT "_site_settings_v_version_accepted_inquiry_types_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_site_settings_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_site_settings_v_version_default_s_e_o_keywords" ADD CONSTRAINT "_site_settings_v_version_default_s_e_o_keywords_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_site_settings_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_site_settings_v_version_social_links" ADD CONSTRAINT "_site_settings_v_version_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_site_settings_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_site_settings_v" ADD CONSTRAINT "_site_settings_v_version_logo_id_media_id_fk" FOREIGN KEY ("version_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_site_settings_v" ADD CONSTRAINT "_site_settings_v_version_favicon_id_media_id_fk" FOREIGN KEY ("version_favicon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_site_settings_v" ADD CONSTRAINT "_site_settings_v_version_default_s_e_o_social_image_id_media_id_fk" FOREIGN KEY ("version_default_s_e_o_social_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "projects_technologies_order_idx" ON "projects_technologies" USING btree ("_order");
  CREATE INDEX "projects_technologies_parent_id_idx" ON "projects_technologies" USING btree ("_parent_id");
  CREATE INDEX "projects_features_order_idx" ON "projects_features" USING btree ("_order");
  CREATE INDEX "projects_features_parent_id_idx" ON "projects_features" USING btree ("_parent_id");
  CREATE INDEX "projects_responsibilities_order_idx" ON "projects_responsibilities" USING btree ("_order");
  CREATE INDEX "projects_responsibilities_parent_id_idx" ON "projects_responsibilities" USING btree ("_parent_id");
  CREATE INDEX "projects_seo_keywords_order_idx" ON "projects_seo_keywords" USING btree ("_order");
  CREATE INDEX "projects_seo_keywords_parent_id_idx" ON "projects_seo_keywords" USING btree ("_parent_id");
  CREATE INDEX "projects__order_idx" ON "projects" USING btree ("_order");
  CREATE UNIQUE INDEX "projects_slug_idx" ON "projects" USING btree ("slug");
  CREATE INDEX "projects_updated_at_idx" ON "projects" USING btree ("updated_at");
  CREATE INDEX "projects_created_at_idx" ON "projects" USING btree ("created_at");
  CREATE INDEX "projects__status_idx" ON "projects" USING btree ("_status");
  CREATE INDEX "_projects_v_version_technologies_order_idx" ON "_projects_v_version_technologies" USING btree ("_order");
  CREATE INDEX "_projects_v_version_technologies_parent_id_idx" ON "_projects_v_version_technologies" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_version_features_order_idx" ON "_projects_v_version_features" USING btree ("_order");
  CREATE INDEX "_projects_v_version_features_parent_id_idx" ON "_projects_v_version_features" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_version_responsibilities_order_idx" ON "_projects_v_version_responsibilities" USING btree ("_order");
  CREATE INDEX "_projects_v_version_responsibilities_parent_id_idx" ON "_projects_v_version_responsibilities" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_version_seo_keywords_order_idx" ON "_projects_v_version_seo_keywords" USING btree ("_order");
  CREATE INDEX "_projects_v_version_seo_keywords_parent_id_idx" ON "_projects_v_version_seo_keywords" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_parent_idx" ON "_projects_v" USING btree ("parent_id");
  CREATE INDEX "_projects_v_version_version__order_idx" ON "_projects_v" USING btree ("version__order");
  CREATE INDEX "_projects_v_version_version_slug_idx" ON "_projects_v" USING btree ("version_slug");
  CREATE INDEX "_projects_v_version_version_updated_at_idx" ON "_projects_v" USING btree ("version_updated_at");
  CREATE INDEX "_projects_v_version_version_created_at_idx" ON "_projects_v" USING btree ("version_created_at");
  CREATE INDEX "_projects_v_version_version__status_idx" ON "_projects_v" USING btree ("version__status");
  CREATE INDEX "_projects_v_created_at_idx" ON "_projects_v" USING btree ("created_at");
  CREATE INDEX "_projects_v_updated_at_idx" ON "_projects_v" USING btree ("updated_at");
  CREATE INDEX "_projects_v_latest_idx" ON "_projects_v" USING btree ("latest");
  CREATE INDEX "_projects_v_autosave_idx" ON "_projects_v" USING btree ("autosave");
  CREATE INDEX "skills_capabilities_order_idx" ON "skills_capabilities" USING btree ("_order");
  CREATE INDEX "skills_capabilities_parent_id_idx" ON "skills_capabilities" USING btree ("_parent_id");
  CREATE INDEX "skills_learning_sources_order_idx" ON "skills_learning_sources" USING btree ("_order");
  CREATE INDEX "skills_learning_sources_parent_id_idx" ON "skills_learning_sources" USING btree ("_parent_id");
  CREATE INDEX "skills_highlights_order_idx" ON "skills_highlights" USING btree ("_order");
  CREATE INDEX "skills_highlights_parent_id_idx" ON "skills_highlights" USING btree ("_parent_id");
  CREATE INDEX "skills_seo_keywords_order_idx" ON "skills_seo_keywords" USING btree ("_order");
  CREATE INDEX "skills_seo_keywords_parent_id_idx" ON "skills_seo_keywords" USING btree ("_parent_id");
  CREATE INDEX "skills__order_idx" ON "skills" USING btree ("_order");
  CREATE UNIQUE INDEX "skills_slug_idx" ON "skills" USING btree ("slug");
  CREATE INDEX "skills_updated_at_idx" ON "skills" USING btree ("updated_at");
  CREATE INDEX "skills_created_at_idx" ON "skills" USING btree ("created_at");
  CREATE INDEX "skills__status_idx" ON "skills" USING btree ("_status");
  CREATE INDEX "skills_rels_order_idx" ON "skills_rels" USING btree ("order");
  CREATE INDEX "skills_rels_parent_idx" ON "skills_rels" USING btree ("parent_id");
  CREATE INDEX "skills_rels_path_idx" ON "skills_rels" USING btree ("path");
  CREATE INDEX "skills_rels_projects_id_idx" ON "skills_rels" USING btree ("projects_id");
  CREATE INDEX "_skills_v_version_capabilities_order_idx" ON "_skills_v_version_capabilities" USING btree ("_order");
  CREATE INDEX "_skills_v_version_capabilities_parent_id_idx" ON "_skills_v_version_capabilities" USING btree ("_parent_id");
  CREATE INDEX "_skills_v_version_learning_sources_order_idx" ON "_skills_v_version_learning_sources" USING btree ("_order");
  CREATE INDEX "_skills_v_version_learning_sources_parent_id_idx" ON "_skills_v_version_learning_sources" USING btree ("_parent_id");
  CREATE INDEX "_skills_v_version_highlights_order_idx" ON "_skills_v_version_highlights" USING btree ("_order");
  CREATE INDEX "_skills_v_version_highlights_parent_id_idx" ON "_skills_v_version_highlights" USING btree ("_parent_id");
  CREATE INDEX "_skills_v_version_seo_keywords_order_idx" ON "_skills_v_version_seo_keywords" USING btree ("_order");
  CREATE INDEX "_skills_v_version_seo_keywords_parent_id_idx" ON "_skills_v_version_seo_keywords" USING btree ("_parent_id");
  CREATE INDEX "_skills_v_parent_idx" ON "_skills_v" USING btree ("parent_id");
  CREATE INDEX "_skills_v_version_version__order_idx" ON "_skills_v" USING btree ("version__order");
  CREATE INDEX "_skills_v_version_version_slug_idx" ON "_skills_v" USING btree ("version_slug");
  CREATE INDEX "_skills_v_version_version_updated_at_idx" ON "_skills_v" USING btree ("version_updated_at");
  CREATE INDEX "_skills_v_version_version_created_at_idx" ON "_skills_v" USING btree ("version_created_at");
  CREATE INDEX "_skills_v_version_version__status_idx" ON "_skills_v" USING btree ("version__status");
  CREATE INDEX "_skills_v_created_at_idx" ON "_skills_v" USING btree ("created_at");
  CREATE INDEX "_skills_v_updated_at_idx" ON "_skills_v" USING btree ("updated_at");
  CREATE INDEX "_skills_v_latest_idx" ON "_skills_v" USING btree ("latest");
  CREATE INDEX "_skills_v_autosave_idx" ON "_skills_v" USING btree ("autosave");
  CREATE INDEX "_skills_v_rels_order_idx" ON "_skills_v_rels" USING btree ("order");
  CREATE INDEX "_skills_v_rels_parent_idx" ON "_skills_v_rels" USING btree ("parent_id");
  CREATE INDEX "_skills_v_rels_path_idx" ON "_skills_v_rels" USING btree ("path");
  CREATE INDEX "_skills_v_rels_projects_id_idx" ON "_skills_v_rels" USING btree ("projects_id");
  CREATE INDEX "education_coursework_order_idx" ON "education_coursework" USING btree ("_order");
  CREATE INDEX "education_coursework_parent_id_idx" ON "education_coursework" USING btree ("_parent_id");
  CREATE INDEX "education_achievements_order_idx" ON "education_achievements" USING btree ("_order");
  CREATE INDEX "education_achievements_parent_id_idx" ON "education_achievements" USING btree ("_parent_id");
  CREATE INDEX "education_activities_order_idx" ON "education_activities" USING btree ("_order");
  CREATE INDEX "education_activities_parent_id_idx" ON "education_activities" USING btree ("_parent_id");
  CREATE INDEX "education_seo_keywords_order_idx" ON "education_seo_keywords" USING btree ("_order");
  CREATE INDEX "education_seo_keywords_parent_id_idx" ON "education_seo_keywords" USING btree ("_parent_id");
  CREATE INDEX "education__order_idx" ON "education" USING btree ("_order");
  CREATE UNIQUE INDEX "education_slug_idx" ON "education" USING btree ("slug");
  CREATE INDEX "education_updated_at_idx" ON "education" USING btree ("updated_at");
  CREATE INDEX "education_created_at_idx" ON "education" USING btree ("created_at");
  CREATE INDEX "education__status_idx" ON "education" USING btree ("_status");
  CREATE INDEX "education_rels_order_idx" ON "education_rels" USING btree ("order");
  CREATE INDEX "education_rels_parent_idx" ON "education_rels" USING btree ("parent_id");
  CREATE INDEX "education_rels_path_idx" ON "education_rels" USING btree ("path");
  CREATE INDEX "education_rels_skills_id_idx" ON "education_rels" USING btree ("skills_id");
  CREATE INDEX "education_rels_projects_id_idx" ON "education_rels" USING btree ("projects_id");
  CREATE INDEX "_education_v_version_coursework_order_idx" ON "_education_v_version_coursework" USING btree ("_order");
  CREATE INDEX "_education_v_version_coursework_parent_id_idx" ON "_education_v_version_coursework" USING btree ("_parent_id");
  CREATE INDEX "_education_v_version_achievements_order_idx" ON "_education_v_version_achievements" USING btree ("_order");
  CREATE INDEX "_education_v_version_achievements_parent_id_idx" ON "_education_v_version_achievements" USING btree ("_parent_id");
  CREATE INDEX "_education_v_version_activities_order_idx" ON "_education_v_version_activities" USING btree ("_order");
  CREATE INDEX "_education_v_version_activities_parent_id_idx" ON "_education_v_version_activities" USING btree ("_parent_id");
  CREATE INDEX "_education_v_version_seo_keywords_order_idx" ON "_education_v_version_seo_keywords" USING btree ("_order");
  CREATE INDEX "_education_v_version_seo_keywords_parent_id_idx" ON "_education_v_version_seo_keywords" USING btree ("_parent_id");
  CREATE INDEX "_education_v_parent_idx" ON "_education_v" USING btree ("parent_id");
  CREATE INDEX "_education_v_version_version__order_idx" ON "_education_v" USING btree ("version__order");
  CREATE INDEX "_education_v_version_version_slug_idx" ON "_education_v" USING btree ("version_slug");
  CREATE INDEX "_education_v_version_version_updated_at_idx" ON "_education_v" USING btree ("version_updated_at");
  CREATE INDEX "_education_v_version_version_created_at_idx" ON "_education_v" USING btree ("version_created_at");
  CREATE INDEX "_education_v_version_version__status_idx" ON "_education_v" USING btree ("version__status");
  CREATE INDEX "_education_v_created_at_idx" ON "_education_v" USING btree ("created_at");
  CREATE INDEX "_education_v_updated_at_idx" ON "_education_v" USING btree ("updated_at");
  CREATE INDEX "_education_v_latest_idx" ON "_education_v" USING btree ("latest");
  CREATE INDEX "_education_v_autosave_idx" ON "_education_v" USING btree ("autosave");
  CREATE INDEX "_education_v_rels_order_idx" ON "_education_v_rels" USING btree ("order");
  CREATE INDEX "_education_v_rels_parent_idx" ON "_education_v_rels" USING btree ("parent_id");
  CREATE INDEX "_education_v_rels_path_idx" ON "_education_v_rels" USING btree ("path");
  CREATE INDEX "_education_v_rels_skills_id_idx" ON "_education_v_rels" USING btree ("skills_id");
  CREATE INDEX "_education_v_rels_projects_id_idx" ON "_education_v_rels" USING btree ("projects_id");
  CREATE INDEX "certifications_learning_outcomes_order_idx" ON "certifications_learning_outcomes" USING btree ("_order");
  CREATE INDEX "certifications_learning_outcomes_parent_id_idx" ON "certifications_learning_outcomes" USING btree ("_parent_id");
  CREATE INDEX "certifications_instructors_order_idx" ON "certifications_instructors" USING btree ("_order");
  CREATE INDEX "certifications_instructors_parent_id_idx" ON "certifications_instructors" USING btree ("_parent_id");
  CREATE INDEX "certifications_seo_keywords_order_idx" ON "certifications_seo_keywords" USING btree ("_order");
  CREATE INDEX "certifications_seo_keywords_parent_id_idx" ON "certifications_seo_keywords" USING btree ("_parent_id");
  CREATE INDEX "certifications__order_idx" ON "certifications" USING btree ("_order");
  CREATE UNIQUE INDEX "certifications_slug_idx" ON "certifications" USING btree ("slug");
  CREATE INDEX "certifications_updated_at_idx" ON "certifications" USING btree ("updated_at");
  CREATE INDEX "certifications_created_at_idx" ON "certifications" USING btree ("created_at");
  CREATE INDEX "certifications__status_idx" ON "certifications" USING btree ("_status");
  CREATE INDEX "certifications_rels_order_idx" ON "certifications_rels" USING btree ("order");
  CREATE INDEX "certifications_rels_parent_idx" ON "certifications_rels" USING btree ("parent_id");
  CREATE INDEX "certifications_rels_path_idx" ON "certifications_rels" USING btree ("path");
  CREATE INDEX "certifications_rels_skills_id_idx" ON "certifications_rels" USING btree ("skills_id");
  CREATE INDEX "certifications_rels_projects_id_idx" ON "certifications_rels" USING btree ("projects_id");
  CREATE INDEX "_certifications_v_version_learning_outcomes_order_idx" ON "_certifications_v_version_learning_outcomes" USING btree ("_order");
  CREATE INDEX "_certifications_v_version_learning_outcomes_parent_id_idx" ON "_certifications_v_version_learning_outcomes" USING btree ("_parent_id");
  CREATE INDEX "_certifications_v_version_instructors_order_idx" ON "_certifications_v_version_instructors" USING btree ("_order");
  CREATE INDEX "_certifications_v_version_instructors_parent_id_idx" ON "_certifications_v_version_instructors" USING btree ("_parent_id");
  CREATE INDEX "_certifications_v_version_seo_keywords_order_idx" ON "_certifications_v_version_seo_keywords" USING btree ("_order");
  CREATE INDEX "_certifications_v_version_seo_keywords_parent_id_idx" ON "_certifications_v_version_seo_keywords" USING btree ("_parent_id");
  CREATE INDEX "_certifications_v_parent_idx" ON "_certifications_v" USING btree ("parent_id");
  CREATE INDEX "_certifications_v_version_version__order_idx" ON "_certifications_v" USING btree ("version__order");
  CREATE INDEX "_certifications_v_version_version_slug_idx" ON "_certifications_v" USING btree ("version_slug");
  CREATE INDEX "_certifications_v_version_version_updated_at_idx" ON "_certifications_v" USING btree ("version_updated_at");
  CREATE INDEX "_certifications_v_version_version_created_at_idx" ON "_certifications_v" USING btree ("version_created_at");
  CREATE INDEX "_certifications_v_version_version__status_idx" ON "_certifications_v" USING btree ("version__status");
  CREATE INDEX "_certifications_v_created_at_idx" ON "_certifications_v" USING btree ("created_at");
  CREATE INDEX "_certifications_v_updated_at_idx" ON "_certifications_v" USING btree ("updated_at");
  CREATE INDEX "_certifications_v_latest_idx" ON "_certifications_v" USING btree ("latest");
  CREATE INDEX "_certifications_v_autosave_idx" ON "_certifications_v" USING btree ("autosave");
  CREATE INDEX "_certifications_v_rels_order_idx" ON "_certifications_v_rels" USING btree ("order");
  CREATE INDEX "_certifications_v_rels_parent_idx" ON "_certifications_v_rels" USING btree ("parent_id");
  CREATE INDEX "_certifications_v_rels_path_idx" ON "_certifications_v_rels" USING btree ("path");
  CREATE INDEX "_certifications_v_rels_skills_id_idx" ON "_certifications_v_rels" USING btree ("skills_id");
  CREATE INDEX "_certifications_v_rels_projects_id_idx" ON "_certifications_v_rels" USING btree ("projects_id");
  CREATE INDEX "experience_responsibilities_order_idx" ON "experience_responsibilities" USING btree ("_order");
  CREATE INDEX "experience_responsibilities_parent_id_idx" ON "experience_responsibilities" USING btree ("_parent_id");
  CREATE INDEX "experience_achievements_order_idx" ON "experience_achievements" USING btree ("_order");
  CREATE INDEX "experience_achievements_parent_id_idx" ON "experience_achievements" USING btree ("_parent_id");
  CREATE INDEX "experience_supporting_documents_order_idx" ON "experience_supporting_documents" USING btree ("_order");
  CREATE INDEX "experience_supporting_documents_parent_id_idx" ON "experience_supporting_documents" USING btree ("_parent_id");
  CREATE INDEX "experience_seo_keywords_order_idx" ON "experience_seo_keywords" USING btree ("_order");
  CREATE INDEX "experience_seo_keywords_parent_id_idx" ON "experience_seo_keywords" USING btree ("_parent_id");
  CREATE INDEX "experience__order_idx" ON "experience" USING btree ("_order");
  CREATE UNIQUE INDEX "experience_slug_idx" ON "experience" USING btree ("slug");
  CREATE INDEX "experience_updated_at_idx" ON "experience" USING btree ("updated_at");
  CREATE INDEX "experience_created_at_idx" ON "experience" USING btree ("created_at");
  CREATE INDEX "experience__status_idx" ON "experience" USING btree ("_status");
  CREATE INDEX "experience_rels_order_idx" ON "experience_rels" USING btree ("order");
  CREATE INDEX "experience_rels_parent_idx" ON "experience_rels" USING btree ("parent_id");
  CREATE INDEX "experience_rels_path_idx" ON "experience_rels" USING btree ("path");
  CREATE INDEX "experience_rels_skills_id_idx" ON "experience_rels" USING btree ("skills_id");
  CREATE INDEX "experience_rels_projects_id_idx" ON "experience_rels" USING btree ("projects_id");
  CREATE INDEX "_experience_v_version_responsibilities_order_idx" ON "_experience_v_version_responsibilities" USING btree ("_order");
  CREATE INDEX "_experience_v_version_responsibilities_parent_id_idx" ON "_experience_v_version_responsibilities" USING btree ("_parent_id");
  CREATE INDEX "_experience_v_version_achievements_order_idx" ON "_experience_v_version_achievements" USING btree ("_order");
  CREATE INDEX "_experience_v_version_achievements_parent_id_idx" ON "_experience_v_version_achievements" USING btree ("_parent_id");
  CREATE INDEX "_experience_v_version_supporting_documents_order_idx" ON "_experience_v_version_supporting_documents" USING btree ("_order");
  CREATE INDEX "_experience_v_version_supporting_documents_parent_id_idx" ON "_experience_v_version_supporting_documents" USING btree ("_parent_id");
  CREATE INDEX "_experience_v_version_seo_keywords_order_idx" ON "_experience_v_version_seo_keywords" USING btree ("_order");
  CREATE INDEX "_experience_v_version_seo_keywords_parent_id_idx" ON "_experience_v_version_seo_keywords" USING btree ("_parent_id");
  CREATE INDEX "_experience_v_parent_idx" ON "_experience_v" USING btree ("parent_id");
  CREATE INDEX "_experience_v_version_version__order_idx" ON "_experience_v" USING btree ("version__order");
  CREATE INDEX "_experience_v_version_version_slug_idx" ON "_experience_v" USING btree ("version_slug");
  CREATE INDEX "_experience_v_version_version_updated_at_idx" ON "_experience_v" USING btree ("version_updated_at");
  CREATE INDEX "_experience_v_version_version_created_at_idx" ON "_experience_v" USING btree ("version_created_at");
  CREATE INDEX "_experience_v_version_version__status_idx" ON "_experience_v" USING btree ("version__status");
  CREATE INDEX "_experience_v_created_at_idx" ON "_experience_v" USING btree ("created_at");
  CREATE INDEX "_experience_v_updated_at_idx" ON "_experience_v" USING btree ("updated_at");
  CREATE INDEX "_experience_v_latest_idx" ON "_experience_v" USING btree ("latest");
  CREATE INDEX "_experience_v_autosave_idx" ON "_experience_v" USING btree ("autosave");
  CREATE INDEX "_experience_v_rels_order_idx" ON "_experience_v_rels" USING btree ("order");
  CREATE INDEX "_experience_v_rels_parent_idx" ON "_experience_v_rels" USING btree ("parent_id");
  CREATE INDEX "_experience_v_rels_path_idx" ON "_experience_v_rels" USING btree ("path");
  CREATE INDEX "_experience_v_rels_skills_id_idx" ON "_experience_v_rels" USING btree ("skills_id");
  CREATE INDEX "_experience_v_rels_projects_id_idx" ON "_experience_v_rels" USING btree ("projects_id");
  CREATE INDEX "media_tags_order_idx" ON "media_tags" USING btree ("_order");
  CREATE INDEX "media_tags_parent_id_idx" ON "media_tags" USING btree ("_parent_id");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "media_sizes_card_sizes_card_filename_idx" ON "media" USING btree ("sizes_card_filename");
  CREATE INDEX "media_sizes_hero_sizes_hero_filename_idx" ON "media" USING btree ("sizes_hero_filename");
  CREATE INDEX "profile_languages_order_idx" ON "profile_languages" USING btree ("_order");
  CREATE INDEX "profile_languages_parent_id_idx" ON "profile_languages" USING btree ("_parent_id");
  CREATE INDEX "profile_career_interests_order_idx" ON "profile_career_interests" USING btree ("_order");
  CREATE INDEX "profile_career_interests_parent_id_idx" ON "profile_career_interests" USING btree ("_parent_id");
  CREATE INDEX "profile_preferred_roles_order_idx" ON "profile_preferred_roles" USING btree ("_order");
  CREATE INDEX "profile_preferred_roles_parent_id_idx" ON "profile_preferred_roles" USING btree ("_parent_id");
  CREATE INDEX "profile_preferred_work_modes_order_idx" ON "profile_preferred_work_modes" USING btree ("order");
  CREATE INDEX "profile_preferred_work_modes_parent_idx" ON "profile_preferred_work_modes" USING btree ("parent_id");
  CREATE INDEX "profile_preferred_locations_order_idx" ON "profile_preferred_locations" USING btree ("_order");
  CREATE INDEX "profile_preferred_locations_parent_id_idx" ON "profile_preferred_locations" USING btree ("_parent_id");
  CREATE INDEX "profile_social_links_order_idx" ON "profile_social_links" USING btree ("_order");
  CREATE INDEX "profile_social_links_parent_id_idx" ON "profile_social_links" USING btree ("_parent_id");
  CREATE INDEX "profile_contact_preferences_order_idx" ON "profile_contact_preferences" USING btree ("_order");
  CREATE INDEX "profile_contact_preferences_parent_id_idx" ON "profile_contact_preferences" USING btree ("_parent_id");
  CREATE INDEX "profile_professional_highlights_order_idx" ON "profile_professional_highlights" USING btree ("_order");
  CREATE INDEX "profile_professional_highlights_parent_id_idx" ON "profile_professional_highlights" USING btree ("_parent_id");
  CREATE INDEX "profile_personal_strengths_order_idx" ON "profile_personal_strengths" USING btree ("_order");
  CREATE INDEX "profile_personal_strengths_parent_id_idx" ON "profile_personal_strengths" USING btree ("_parent_id");
  CREATE INDEX "profile_seo_keywords_order_idx" ON "profile_seo_keywords" USING btree ("_order");
  CREATE INDEX "profile_seo_keywords_parent_id_idx" ON "profile_seo_keywords" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "profile_slug_idx" ON "profile" USING btree ("slug");
  CREATE INDEX "profile_profile_photo_idx" ON "profile" USING btree ("profile_photo_id");
  CREATE INDEX "profile_resume_idx" ON "profile" USING btree ("resume_id");
  CREATE INDEX "profile_updated_at_idx" ON "profile" USING btree ("updated_at");
  CREATE INDEX "profile_created_at_idx" ON "profile" USING btree ("created_at");
  CREATE INDEX "profile__status_idx" ON "profile" USING btree ("_status");
  CREATE INDEX "profile_rels_order_idx" ON "profile_rels" USING btree ("order");
  CREATE INDEX "profile_rels_parent_idx" ON "profile_rels" USING btree ("parent_id");
  CREATE INDEX "profile_rels_path_idx" ON "profile_rels" USING btree ("path");
  CREATE INDEX "profile_rels_skills_id_idx" ON "profile_rels" USING btree ("skills_id");
  CREATE INDEX "_profile_v_version_languages_order_idx" ON "_profile_v_version_languages" USING btree ("_order");
  CREATE INDEX "_profile_v_version_languages_parent_id_idx" ON "_profile_v_version_languages" USING btree ("_parent_id");
  CREATE INDEX "_profile_v_version_career_interests_order_idx" ON "_profile_v_version_career_interests" USING btree ("_order");
  CREATE INDEX "_profile_v_version_career_interests_parent_id_idx" ON "_profile_v_version_career_interests" USING btree ("_parent_id");
  CREATE INDEX "_profile_v_version_preferred_roles_order_idx" ON "_profile_v_version_preferred_roles" USING btree ("_order");
  CREATE INDEX "_profile_v_version_preferred_roles_parent_id_idx" ON "_profile_v_version_preferred_roles" USING btree ("_parent_id");
  CREATE INDEX "_profile_v_version_preferred_work_modes_order_idx" ON "_profile_v_version_preferred_work_modes" USING btree ("order");
  CREATE INDEX "_profile_v_version_preferred_work_modes_parent_idx" ON "_profile_v_version_preferred_work_modes" USING btree ("parent_id");
  CREATE INDEX "_profile_v_version_preferred_locations_order_idx" ON "_profile_v_version_preferred_locations" USING btree ("_order");
  CREATE INDEX "_profile_v_version_preferred_locations_parent_id_idx" ON "_profile_v_version_preferred_locations" USING btree ("_parent_id");
  CREATE INDEX "_profile_v_version_social_links_order_idx" ON "_profile_v_version_social_links" USING btree ("_order");
  CREATE INDEX "_profile_v_version_social_links_parent_id_idx" ON "_profile_v_version_social_links" USING btree ("_parent_id");
  CREATE INDEX "_profile_v_version_contact_preferences_order_idx" ON "_profile_v_version_contact_preferences" USING btree ("_order");
  CREATE INDEX "_profile_v_version_contact_preferences_parent_id_idx" ON "_profile_v_version_contact_preferences" USING btree ("_parent_id");
  CREATE INDEX "_profile_v_version_professional_highlights_order_idx" ON "_profile_v_version_professional_highlights" USING btree ("_order");
  CREATE INDEX "_profile_v_version_professional_highlights_parent_id_idx" ON "_profile_v_version_professional_highlights" USING btree ("_parent_id");
  CREATE INDEX "_profile_v_version_personal_strengths_order_idx" ON "_profile_v_version_personal_strengths" USING btree ("_order");
  CREATE INDEX "_profile_v_version_personal_strengths_parent_id_idx" ON "_profile_v_version_personal_strengths" USING btree ("_parent_id");
  CREATE INDEX "_profile_v_version_seo_keywords_order_idx" ON "_profile_v_version_seo_keywords" USING btree ("_order");
  CREATE INDEX "_profile_v_version_seo_keywords_parent_id_idx" ON "_profile_v_version_seo_keywords" USING btree ("_parent_id");
  CREATE INDEX "_profile_v_parent_idx" ON "_profile_v" USING btree ("parent_id");
  CREATE INDEX "_profile_v_version_version_slug_idx" ON "_profile_v" USING btree ("version_slug");
  CREATE INDEX "_profile_v_version_version_profile_photo_idx" ON "_profile_v" USING btree ("version_profile_photo_id");
  CREATE INDEX "_profile_v_version_version_resume_idx" ON "_profile_v" USING btree ("version_resume_id");
  CREATE INDEX "_profile_v_version_version_updated_at_idx" ON "_profile_v" USING btree ("version_updated_at");
  CREATE INDEX "_profile_v_version_version_created_at_idx" ON "_profile_v" USING btree ("version_created_at");
  CREATE INDEX "_profile_v_version_version__status_idx" ON "_profile_v" USING btree ("version__status");
  CREATE INDEX "_profile_v_created_at_idx" ON "_profile_v" USING btree ("created_at");
  CREATE INDEX "_profile_v_updated_at_idx" ON "_profile_v" USING btree ("updated_at");
  CREATE INDEX "_profile_v_latest_idx" ON "_profile_v" USING btree ("latest");
  CREATE INDEX "_profile_v_autosave_idx" ON "_profile_v" USING btree ("autosave");
  CREATE INDEX "_profile_v_rels_order_idx" ON "_profile_v_rels" USING btree ("order");
  CREATE INDEX "_profile_v_rels_parent_idx" ON "_profile_v_rels" USING btree ("parent_id");
  CREATE INDEX "_profile_v_rels_path_idx" ON "_profile_v_rels" USING btree ("path");
  CREATE INDEX "_profile_v_rels_skills_id_idx" ON "_profile_v_rels" USING btree ("skills_id");
  CREATE INDEX "contact_submissions_assigned_to_idx" ON "contact_submissions" USING btree ("assigned_to_id");
  CREATE INDEX "contact_submissions_updated_at_idx" ON "contact_submissions" USING btree ("updated_at");
  CREATE INDEX "contact_submissions_created_at_idx" ON "contact_submissions" USING btree ("created_at");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_projects_id_idx" ON "payload_locked_documents_rels" USING btree ("projects_id");
  CREATE INDEX "payload_locked_documents_rels_skills_id_idx" ON "payload_locked_documents_rels" USING btree ("skills_id");
  CREATE INDEX "payload_locked_documents_rels_education_id_idx" ON "payload_locked_documents_rels" USING btree ("education_id");
  CREATE INDEX "payload_locked_documents_rels_certifications_id_idx" ON "payload_locked_documents_rels" USING btree ("certifications_id");
  CREATE INDEX "payload_locked_documents_rels_experience_id_idx" ON "payload_locked_documents_rels" USING btree ("experience_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_profile_id_idx" ON "payload_locked_documents_rels" USING btree ("profile_id");
  CREATE INDEX "payload_locked_documents_rels_contact_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("contact_submissions_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "site_settings_navigation_items_order_idx" ON "site_settings_navigation_items" USING btree ("_order");
  CREATE INDEX "site_settings_navigation_items_parent_id_idx" ON "site_settings_navigation_items" USING btree ("_parent_id");
  CREATE INDEX "site_settings_footer_links_order_idx" ON "site_settings_footer_links" USING btree ("_order");
  CREATE INDEX "site_settings_footer_links_parent_id_idx" ON "site_settings_footer_links" USING btree ("_parent_id");
  CREATE INDEX "site_settings_accepted_inquiry_types_order_idx" ON "site_settings_accepted_inquiry_types" USING btree ("_order");
  CREATE INDEX "site_settings_accepted_inquiry_types_parent_id_idx" ON "site_settings_accepted_inquiry_types" USING btree ("_parent_id");
  CREATE INDEX "site_settings_default_s_e_o_keywords_order_idx" ON "site_settings_default_s_e_o_keywords" USING btree ("_order");
  CREATE INDEX "site_settings_default_s_e_o_keywords_parent_id_idx" ON "site_settings_default_s_e_o_keywords" USING btree ("_parent_id");
  CREATE INDEX "site_settings_social_links_order_idx" ON "site_settings_social_links" USING btree ("_order");
  CREATE INDEX "site_settings_social_links_parent_id_idx" ON "site_settings_social_links" USING btree ("_parent_id");
  CREATE INDEX "site_settings_logo_idx" ON "site_settings" USING btree ("logo_id");
  CREATE INDEX "site_settings_favicon_idx" ON "site_settings" USING btree ("favicon_id");
  CREATE INDEX "site_settings_default_s_e_o_default_s_e_o_social_image_idx" ON "site_settings" USING btree ("default_s_e_o_social_image_id");
  CREATE INDEX "site_settings__status_idx" ON "site_settings" USING btree ("_status");
  CREATE INDEX "_site_settings_v_version_navigation_items_order_idx" ON "_site_settings_v_version_navigation_items" USING btree ("_order");
  CREATE INDEX "_site_settings_v_version_navigation_items_parent_id_idx" ON "_site_settings_v_version_navigation_items" USING btree ("_parent_id");
  CREATE INDEX "_site_settings_v_version_footer_links_order_idx" ON "_site_settings_v_version_footer_links" USING btree ("_order");
  CREATE INDEX "_site_settings_v_version_footer_links_parent_id_idx" ON "_site_settings_v_version_footer_links" USING btree ("_parent_id");
  CREATE INDEX "_site_settings_v_version_accepted_inquiry_types_order_idx" ON "_site_settings_v_version_accepted_inquiry_types" USING btree ("_order");
  CREATE INDEX "_site_settings_v_version_accepted_inquiry_types_parent_id_idx" ON "_site_settings_v_version_accepted_inquiry_types" USING btree ("_parent_id");
  CREATE INDEX "_site_settings_v_version_default_s_e_o_keywords_order_idx" ON "_site_settings_v_version_default_s_e_o_keywords" USING btree ("_order");
  CREATE INDEX "_site_settings_v_version_default_s_e_o_keywords_parent_id_idx" ON "_site_settings_v_version_default_s_e_o_keywords" USING btree ("_parent_id");
  CREATE INDEX "_site_settings_v_version_social_links_order_idx" ON "_site_settings_v_version_social_links" USING btree ("_order");
  CREATE INDEX "_site_settings_v_version_social_links_parent_id_idx" ON "_site_settings_v_version_social_links" USING btree ("_parent_id");
  CREATE INDEX "_site_settings_v_version_version_logo_idx" ON "_site_settings_v" USING btree ("version_logo_id");
  CREATE INDEX "_site_settings_v_version_version_favicon_idx" ON "_site_settings_v" USING btree ("version_favicon_id");
  CREATE INDEX "_site_settings_v_version_default_s_e_o_version_default_s_idx" ON "_site_settings_v" USING btree ("version_default_s_e_o_social_image_id");
  CREATE INDEX "_site_settings_v_version_version__status_idx" ON "_site_settings_v" USING btree ("version__status");
  CREATE INDEX "_site_settings_v_created_at_idx" ON "_site_settings_v" USING btree ("created_at");
  CREATE INDEX "_site_settings_v_updated_at_idx" ON "_site_settings_v" USING btree ("updated_at");
  CREATE INDEX "_site_settings_v_latest_idx" ON "_site_settings_v" USING btree ("latest");
  CREATE INDEX "_site_settings_v_autosave_idx" ON "_site_settings_v" USING btree ("autosave");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "projects_technologies" CASCADE;
  DROP TABLE "projects_features" CASCADE;
  DROP TABLE "projects_responsibilities" CASCADE;
  DROP TABLE "projects_seo_keywords" CASCADE;
  DROP TABLE "projects" CASCADE;
  DROP TABLE "_projects_v_version_technologies" CASCADE;
  DROP TABLE "_projects_v_version_features" CASCADE;
  DROP TABLE "_projects_v_version_responsibilities" CASCADE;
  DROP TABLE "_projects_v_version_seo_keywords" CASCADE;
  DROP TABLE "_projects_v" CASCADE;
  DROP TABLE "skills_capabilities" CASCADE;
  DROP TABLE "skills_learning_sources" CASCADE;
  DROP TABLE "skills_highlights" CASCADE;
  DROP TABLE "skills_seo_keywords" CASCADE;
  DROP TABLE "skills" CASCADE;
  DROP TABLE "skills_rels" CASCADE;
  DROP TABLE "_skills_v_version_capabilities" CASCADE;
  DROP TABLE "_skills_v_version_learning_sources" CASCADE;
  DROP TABLE "_skills_v_version_highlights" CASCADE;
  DROP TABLE "_skills_v_version_seo_keywords" CASCADE;
  DROP TABLE "_skills_v" CASCADE;
  DROP TABLE "_skills_v_rels" CASCADE;
  DROP TABLE "education_coursework" CASCADE;
  DROP TABLE "education_achievements" CASCADE;
  DROP TABLE "education_activities" CASCADE;
  DROP TABLE "education_seo_keywords" CASCADE;
  DROP TABLE "education" CASCADE;
  DROP TABLE "education_rels" CASCADE;
  DROP TABLE "_education_v_version_coursework" CASCADE;
  DROP TABLE "_education_v_version_achievements" CASCADE;
  DROP TABLE "_education_v_version_activities" CASCADE;
  DROP TABLE "_education_v_version_seo_keywords" CASCADE;
  DROP TABLE "_education_v" CASCADE;
  DROP TABLE "_education_v_rels" CASCADE;
  DROP TABLE "certifications_learning_outcomes" CASCADE;
  DROP TABLE "certifications_instructors" CASCADE;
  DROP TABLE "certifications_seo_keywords" CASCADE;
  DROP TABLE "certifications" CASCADE;
  DROP TABLE "certifications_rels" CASCADE;
  DROP TABLE "_certifications_v_version_learning_outcomes" CASCADE;
  DROP TABLE "_certifications_v_version_instructors" CASCADE;
  DROP TABLE "_certifications_v_version_seo_keywords" CASCADE;
  DROP TABLE "_certifications_v" CASCADE;
  DROP TABLE "_certifications_v_rels" CASCADE;
  DROP TABLE "experience_responsibilities" CASCADE;
  DROP TABLE "experience_achievements" CASCADE;
  DROP TABLE "experience_supporting_documents" CASCADE;
  DROP TABLE "experience_seo_keywords" CASCADE;
  DROP TABLE "experience" CASCADE;
  DROP TABLE "experience_rels" CASCADE;
  DROP TABLE "_experience_v_version_responsibilities" CASCADE;
  DROP TABLE "_experience_v_version_achievements" CASCADE;
  DROP TABLE "_experience_v_version_supporting_documents" CASCADE;
  DROP TABLE "_experience_v_version_seo_keywords" CASCADE;
  DROP TABLE "_experience_v" CASCADE;
  DROP TABLE "_experience_v_rels" CASCADE;
  DROP TABLE "media_tags" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "profile_languages" CASCADE;
  DROP TABLE "profile_career_interests" CASCADE;
  DROP TABLE "profile_preferred_roles" CASCADE;
  DROP TABLE "profile_preferred_work_modes" CASCADE;
  DROP TABLE "profile_preferred_locations" CASCADE;
  DROP TABLE "profile_social_links" CASCADE;
  DROP TABLE "profile_contact_preferences" CASCADE;
  DROP TABLE "profile_professional_highlights" CASCADE;
  DROP TABLE "profile_personal_strengths" CASCADE;
  DROP TABLE "profile_seo_keywords" CASCADE;
  DROP TABLE "profile" CASCADE;
  DROP TABLE "profile_rels" CASCADE;
  DROP TABLE "_profile_v_version_languages" CASCADE;
  DROP TABLE "_profile_v_version_career_interests" CASCADE;
  DROP TABLE "_profile_v_version_preferred_roles" CASCADE;
  DROP TABLE "_profile_v_version_preferred_work_modes" CASCADE;
  DROP TABLE "_profile_v_version_preferred_locations" CASCADE;
  DROP TABLE "_profile_v_version_social_links" CASCADE;
  DROP TABLE "_profile_v_version_contact_preferences" CASCADE;
  DROP TABLE "_profile_v_version_professional_highlights" CASCADE;
  DROP TABLE "_profile_v_version_personal_strengths" CASCADE;
  DROP TABLE "_profile_v_version_seo_keywords" CASCADE;
  DROP TABLE "_profile_v" CASCADE;
  DROP TABLE "_profile_v_rels" CASCADE;
  DROP TABLE "contact_submissions" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "site_settings_navigation_items" CASCADE;
  DROP TABLE "site_settings_footer_links" CASCADE;
  DROP TABLE "site_settings_accepted_inquiry_types" CASCADE;
  DROP TABLE "site_settings_default_s_e_o_keywords" CASCADE;
  DROP TABLE "site_settings_social_links" CASCADE;
  DROP TABLE "site_settings" CASCADE;
  DROP TABLE "_site_settings_v_version_navigation_items" CASCADE;
  DROP TABLE "_site_settings_v_version_footer_links" CASCADE;
  DROP TABLE "_site_settings_v_version_accepted_inquiry_types" CASCADE;
  DROP TABLE "_site_settings_v_version_default_s_e_o_keywords" CASCADE;
  DROP TABLE "_site_settings_v_version_social_links" CASCADE;
  DROP TABLE "_site_settings_v" CASCADE;
  DROP TYPE "public"."enum_users_role";
  DROP TYPE "public"."enum_projects_technologies_category";
  DROP TYPE "public"."enum_projects_project_type";
  DROP TYPE "public"."enum_projects_development_status";
  DROP TYPE "public"."enum_projects_status";
  DROP TYPE "public"."enum__projects_v_version_technologies_category";
  DROP TYPE "public"."enum__projects_v_version_project_type";
  DROP TYPE "public"."enum__projects_v_version_development_status";
  DROP TYPE "public"."enum__projects_v_version_status";
  DROP TYPE "public"."enum_skills_category";
  DROP TYPE "public"."enum_skills_proficiency";
  DROP TYPE "public"."enum_skills_accent_style";
  DROP TYPE "public"."enum_skills_status";
  DROP TYPE "public"."enum__skills_v_version_category";
  DROP TYPE "public"."enum__skills_v_version_proficiency";
  DROP TYPE "public"."enum__skills_v_version_accent_style";
  DROP TYPE "public"."enum__skills_v_version_status";
  DROP TYPE "public"."enum_education_education_level";
  DROP TYPE "public"."enum_education_result_type";
  DROP TYPE "public"."enum_education_academic_standing";
  DROP TYPE "public"."enum_education_status";
  DROP TYPE "public"."enum__education_v_version_education_level";
  DROP TYPE "public"."enum__education_v_version_result_type";
  DROP TYPE "public"."enum__education_v_version_academic_standing";
  DROP TYPE "public"."enum__education_v_version_status";
  DROP TYPE "public"."enum_certifications_certification_type";
  DROP TYPE "public"."enum_certifications_credential_status";
  DROP TYPE "public"."enum_certifications_accent_style";
  DROP TYPE "public"."enum_certifications_status";
  DROP TYPE "public"."enum__certifications_v_version_certification_type";
  DROP TYPE "public"."enum__certifications_v_version_credential_status";
  DROP TYPE "public"."enum__certifications_v_version_accent_style";
  DROP TYPE "public"."enum__certifications_v_version_status";
  DROP TYPE "public"."enum_experience_supporting_documents_document_type";
  DROP TYPE "public"."enum_experience_experience_type";
  DROP TYPE "public"."enum_experience_work_mode";
  DROP TYPE "public"."enum_experience_accent_style";
  DROP TYPE "public"."enum_experience_status";
  DROP TYPE "public"."enum__experience_v_version_supporting_documents_document_type";
  DROP TYPE "public"."enum__experience_v_version_experience_type";
  DROP TYPE "public"."enum__experience_v_version_work_mode";
  DROP TYPE "public"."enum__experience_v_version_accent_style";
  DROP TYPE "public"."enum__experience_v_version_status";
  DROP TYPE "public"."enum_media_media_type";
  DROP TYPE "public"."enum_media_visibility";
  DROP TYPE "public"."enum_profile_languages_proficiency";
  DROP TYPE "public"."enum_profile_preferred_work_modes";
  DROP TYPE "public"."enum_profile_social_links_platform";
  DROP TYPE "public"."enum_profile_availability_status";
  DROP TYPE "public"."enum_profile_status";
  DROP TYPE "public"."enum__profile_v_version_languages_proficiency";
  DROP TYPE "public"."enum__profile_v_version_preferred_work_modes";
  DROP TYPE "public"."enum__profile_v_version_social_links_platform";
  DROP TYPE "public"."enum__profile_v_version_availability_status";
  DROP TYPE "public"."enum__profile_v_version_status";
  DROP TYPE "public"."enum_contact_submissions_inquiry_type";
  DROP TYPE "public"."enum_contact_submissions_preferred_contact_method";
  DROP TYPE "public"."enum_contact_submissions_submission_status";
  DROP TYPE "public"."enum_contact_submissions_priority";
  DROP TYPE "public"."enum_site_settings_social_links_platform";
  DROP TYPE "public"."enum_site_settings_analytics_provider";
  DROP TYPE "public"."enum_site_settings_status";
  DROP TYPE "public"."enum__site_settings_v_version_social_links_platform";
  DROP TYPE "public"."enum__site_settings_v_version_analytics_provider";
  DROP TYPE "public"."enum__site_settings_v_version_status";`)
}
