import React from 'react';
import { Table } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className="container">
            <h1 className="text-secondary fw-bold">What is the difference between authentication and authorization?</h1>
            <h2 className="text-primary">The difference between authentication and authorization:</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Authentication</th>
                        <th>Authorization</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Authentication is the process of confirming someone's identity.</td>
                        <td>The process of confirming which apps, files, and data a user has access to is known as authorisation.</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Authentication confirms the identity of the user.</td>
                        <td>Authorization determines what resources a user can access.</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Authentication is the first step of a good identity and access management process.</td>
                        <td>Authorization always takes place after authentication.</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Authentication is visible to and partially changeable by the user.</td>
                        <td>Authorization isn’t visible to or changeable by the user.</td>
                    </tr>
                </tbody>
            </Table>
            <h1 className="text-secondary fw-bold">Why are you using firebase? What other options do you have to implement authentication?</h1>
            <h2 className="text-primary">The reason of using firebase</h2>
            <ul type="dot">
                <li>Create Application without backend server</li>
                <li>No need extra money spent for backend server</li>
                <li>Sync real time data in the application</li>
                <li>Faster then any backend web services</li>
                <li>Quick display data in the application</li>
            </ul>
            <h2 className="text-primary">The other way of authentication:</h2>
            <ul>
                <li>Password-based authentication</li>
                <li>Multi-factor authentication</li>
                <li>Certificate-based authentication</li>
                <li>Biometric authentication</li>
                <li>Token-based authentication</li>
            </ul>
            <h1 className="text-secondary fw-bold">What other services does firebase provide other than authentication?</h1>
            <h2 className="text-primary">The other options:</h2>
            <ul type="dot">
                <li>Google Analytics for Firebase offers free, unlimited reporting on as many as 500 separate events. Analytics presents data about user behavior in iOS and Android apps, enabling better decision-making about improving performance and app marketing.
                </li>
                <li>Firebase Cloud Messaging (FCM) is a cross-platform messaging tool that lets companies reliably receive and deliver messages on iOS, Android and the web at no cost.</li>
                <li>The Firebase Realtime Database is a cloud-hosted NoSQL database that enables data to be stored and synced between users in real time. The data is synced across all clients in real time and is still available when an app goes offline.</li>
                <li>Firebase Crashlytics is a real-time crash reporter that helps developers track, prioritize and fix stability issues that reduce the quality of their apps. With crashlytics, developers spend less time organizing and troubleshooting crashes and more time building features for their apps.</li>
                <li>Firebase Performance Monitoring service gives developers insight into the performance characteristics of their iOS and Android apps to help them determine where and when the performance of their apps can be improved</li>
                <li>Firebase Test Lab is a cloud-based app-testing infrastructure. With one operation, developers can test their iOS or Android apps across a variety of devices and device configurations. They can see the results, including videos, screenshots and logs, in the Firebase console.</li>
            </ul>
        </div>
    );
};

export default Blog;