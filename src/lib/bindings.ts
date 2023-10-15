/* eslint-disable */
// This file was generated by [tauri-specta](https://github.com/oscartbeaumont/tauri-specta). Do not edit this file manually.

declare global {
    interface Window {
        __TAURI_INVOKE__<T>(cmd: string, args?: Record<string, unknown>): Promise<T>;
    }
}

// Function avoids 'window not defined' in SSR
const invoke = () => window.__TAURI_INVOKE__;

export function signin(identity: string, password: string, remember: boolean) {
    return invoke()<null>("signin", { identity,password,remember })
}

export function signup(email: string, username: string, password: string, remember: boolean) {
    return invoke()<null>("signup", { email,username,password,remember })
}

export function signout() {
    return invoke()<null>("signout")
}

export function isAuthenticated() {
    return invoke()<boolean>("is_authenticated")
}

export function createBucket(bucketName: string, bucketColor: string) {
    return invoke()<string>("create_bucket", { bucketName,bucketColor })
}

export function getBuckets() {
    return invoke()<Bucket[]>("get_buckets")
}

export function recolorBucket(bucketId: string, bucketColor: string) {
    return invoke()<string>("recolor_bucket", { bucketId,bucketColor })
}

export function renameBucket(bucketId: string, bucketName: string) {
    return invoke()<string>("rename_bucket", { bucketId,bucketName })
}

export function deleteBucket(bucketId: string) {
    return invoke()<string>("delete_bucket", { bucketId })
}

export function secureLiveInput(institution: string, identity: string, industry: Industry) {
    return invoke()<string>("secure_live_input", { institution,identity,industry })
}

export function createSecure(institutionName: string, institutionWebsite: string | null, institutionAlias: string[], identity: string, recovery: string | null, industry: Industry, bucketid: string | null, twofactorid: string | null) {
    return invoke()<string>("create_secure", { institutionName,institutionWebsite,institutionAlias,identity,recovery,industry,bucketid,twofactorid })
}

export function getSecure(id: string) {
    return invoke()<[SecureAccount, string]>("get_secure", { id })
}

export function deleteSecure(id: string) {
    return invoke()<null>("delete_secure", { id })
}

export function getSupersecure(id: string) {
    return invoke()<[SuperSecureAccount, string]>("get_supersecure", { id })
}

export function deleteSupersecure(id: string) {
    return invoke()<null>("delete_supersecure", { id })
}

export function createSso(institutionName: string, institutionWebsite: string | null, institutionAlias: string[], ssoId: string, recovery: string | null, bucketid: string | null, twofactorid: string | null) {
    return invoke()<string>("create_sso", { institutionName,institutionWebsite,institutionAlias,ssoId,recovery,bucketid,twofactorid })
}

export function getSso(id: string) {
    return invoke()<SsoAccount>("get_sso", { id })
}

export function deleteSso(id: string) {
    return invoke()<null>("delete_sso", { id })
}

export function search(searchTerm: string) {
    return invoke()<AccountOverview[]>("search", { searchTerm })
}

export function searchBucket(searchTerm: string, bucketId: string) {
    return invoke()<AccountOverview[]>("search_bucket", { searchTerm,bucketId })
}

export type AccountType = "Secure" | "SuperSecure" | "Sso"
export type Bucket = { id: string; name: string; color: string }
export type AccountData = { created_at: string; recovery: string | null; institution: Institution; account_type: AccountType }
export type AccountOverview = { id: string; institution_name: string; bucket_name: string | null; account_type: AccountType }
export type SuperSecureAccount = { identity: string; industry: Industry; pin: number; min_length: number; max_length: number; account: AccountData }
export type Industry = "Tech" | "Games" | "Social" | "Finance" | "Shopping" | "Science" | "Other"
export type SecureAccount = { identity: string; industry: Industry; account: AccountData }
export type SsoAccount = { sso: Institution; account: AccountData }
export type Institution = { name: string }
